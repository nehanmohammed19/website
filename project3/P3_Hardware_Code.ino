#include "SoftwareSerial.h"
#include "DFRobotDFPlayerMini.h"
#include <Arduino.h>
#include "HX711.h"

// HX711 circuit wiring
const int LOADCELL_DOUT_PIN = 4;
const int LOADCELL_SCK_PIN = 5;
HX711 scale;

SoftwareSerial mySoftwareSerial(10, 11);  // RX, TX
DFRobotDFPlayerMini myDFPlayer;

float reading_1;
float prev_reading = 0;
int hundreds;
unsigned long stability_start_time = 0;
bool has_spoken = false;
unsigned long last_button_press_time = 0;
int weight1 = 0;

// Conversion constants for cup mode
const float gramsPerCup = 236.0;  
const int tolerance = 5;         

bool modeCups = false;
bool powerOn = true;

const int button_pins[] = {6, 7, 8, 9};
int num_buttons = 4;

void setup() {
  Serial.begin(57600);
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  for (int i = 0; i < num_buttons; i++) {
    pinMode(button_pins[i], INPUT_PULLUP);  
  }

  // Initialize serial communication with DFPlayer Mini
  mySoftwareSerial.begin(9600);

  // Initialize DFPlayer Mini
  myDFPlayer.begin(mySoftwareSerial);
  myDFPlayer.setTimeOut(500);  // Set serial timeout for 500ms
  myDFPlayer.volume(30);       // Set volume level to 30
  myDFPlayer.EQ(2);            // Set equalizer to normal

  scale.set_scale(712.075221);  // Calibrate the scale
  scale.tare();                 // Tare the scale
}

void power_on_off() {
  powerOn = !powerOn;
  if (powerOn) {
    Serial.println("Power ON. Scale ready to weigh ingredients.");
    myDFPlayer.playFolder(12, 8);
  } else {
    Serial.println("Power OFF. Scale disabled.");
    myDFPlayer.playFolder(12, 11);
  }
}

void change_setting() {
  modeCups = !modeCups;
  if (modeCups) {
    Serial.println("Switched to Cups mode.");
    myDFPlayer.playFolder(12, 10);
  } else {
    Serial.println("Switched to Grams mode.");
    myDFPlayer.playFolder(12, 9);
  }
}

void tare_weight() {
  Serial.println("Tare... remove any weights from the scale.");
  delay(200);
  scale.tare();
  myDFPlayer.playFolder(12, 3);
}

void repeat_weight(float var) {
  Serial.print("Current Weight: ");
  myDFPlayer.playFolder(12, 7);
  delay(1400);
  speak(var);
}

int getCupAudioFile(int weight) {
  float cupValue = weight / gramsPerCup;
  // Round to the nearest quarter-cup 
  int quarterIndex = round(cupValue / 0.25);
  float roundedCup = quarterIndex * 0.25;
  float targetWeight = roundedCup * gramsPerCup;
  
  // variation: 1 = exact, 2 = a bit under, 3 = a bit over
  int variation = 1;
  if (weight < targetWeight - tolerance) {
    variation = 2; 
  } else if (weight > targetWeight + tolerance) {
    variation = 3;  
  }
  
  int fileNumber = (quarterIndex - 1) * 3 + variation;
  if (fileNumber < 1) fileNumber = 1;
  if (fileNumber > 51) fileNumber = 51;
  return fileNumber;
}

void speak(float weight) {
  if (modeCups) {
    int fileNumber = getCupAudioFile((int)weight);
    Serial.print("Cups mode: playing file ");
    Serial.println(fileNumber);
    myDFPlayer.playFolder(13, fileNumber);
  } else {
    hundreds = weight / 100;
    int reading = round(weight) % 100;
    Serial.print("Grams mode: Weight: ");
    Serial.println(weight, 1);
    Serial.print("Hundreds: ");
    Serial.println(hundreds + 1);
    if (weight >= 99) {
      myDFPlayer.playFolder(hundreds + 1, reading + 1);
    } else {
      myDFPlayer.playFolder(hundreds + 1, reading);
    }
  }
}

void loop() {
  if (millis() - last_button_press_time > 100) {
    for (int i = 0; i < num_buttons; i++) {
      if (digitalRead(button_pins[i]) == LOW) {
        last_button_press_time = millis();
        switch(i) {
          case 0: 
            power_on_off();
            break;
          
          case 1: 
            if (powerOn) change_setting();
            break;

          case 3: 
            if (powerOn) tare_weight();
            break;

          case 2: 
            if (powerOn) repeat_weight(reading_1);
            break;

          default:
            break;
        }
        delay(50);
      }
    }
  }
  
  if (powerOn) {
    reading_1 = scale.get_units(10);
  
    if (abs(reading_1 - prev_reading) < 0.3) {
      if (stability_start_time == 0) {
        stability_start_time = millis();
      }
      if ((millis() - stability_start_time) >= 300 && !has_spoken) {
        speak(reading_1);
        has_spoken = true;
      }
    } else {
      stability_start_time = 0;
      has_spoken = false;
    }
    prev_reading = reading_1;
    Serial.println(reading_1);
  }
  delay(10);
}