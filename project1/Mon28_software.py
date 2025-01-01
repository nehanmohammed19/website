"""
authors: Nehan, Kelly, Victoria, Ian, Miah 
Group: Mon-28
This program simulates an airline management system by processing passenger and
fleet data, analyzing the information, and displaying key metrics using Turtle
Graphics. It reads data from external files, performs calculations, and outputs
the results in a visually appealing, table-like graphical format. The program
uses various functions to process specific things. 

"""



# Import the turtle module for graphics
import turtle

def passenger_data():
    """
    Reads passenger data from "passenger_data_v1.txt" and returns it as a 2D list.
    Each inner list contains details like name, gate, and status.
    """
    data = "passenger_data_v1.txt"
  
    file = open(data, 'r')

    # List to store processed passenger data
    passenger_data_list = []

    # Read each line, split by commas, and store the result in the list
    for line in file:
        data = line.strip().split(",")  # Remove trailing whitespace and split the line
        passenger_data_list.append(data)  

    file.close()

   
    return passenger_data_list


def fleet_data():
    """
    Reads fleet data from "fleet_data.txt" and returns it as a 2D list.
    Each inner list contains details like plane model and gate.
    """
    data = "fleet_data.txt"

    # Open the file in read mode
    file = open(data, 'r')

    # List to store processed fleet data
    fleet_data_list = []

    # Read each line, split by commas, and store the result in the list
    for line in file:
        data = line.strip().split(",")  # Remove trailing whitespace and split the line
        fleet_data_list.append(data) 


    file.close()

    return fleet_data_list

def daily_data(passenger_data):
    """
   Calculates total economy and business class passengers for each gate and takes
   paramets from passenger data 2D list. Returns a 2D list with gate, business 
   class count, and economy class count.
    """
    current_gate = ""
    passenger_econ_num = 0  # Economy class passenger count
    passenger_business_num = 0  # Business class passenger count
    daily_data_list = []  # List to store summary data for each gate

    for passenger in passenger_data:
        if passenger[2] != current_gate:
            # If moving to a new gate, save the previous gate's data 
            if current_gate != "":
                daily_data_list.append([current_gate, passenger_business_num, passenger_econ_num])
            
            # Update the current gate and reset passenger counts
            current_gate = passenger[2]
            passenger_econ_num = 0
            passenger_business_num = 0

        # Count economy or business class passengers based on their ticket class
        if passenger[3] == "E":
            passenger_econ_num += 1
        elif passenger[3] == "B":
            passenger_business_num += 1

    # Append the last gate's data to the daily data list
    if current_gate != "":
        daily_data_list.append([current_gate, passenger_business_num, passenger_econ_num])

    # Return the summary list of daily passenger data
    return daily_data_list

def oversold(passenger_data, fleet_data, daily_data):
    """
    Calculates oversold business and economy seats per plane model. Takes 
    parameters of passenger data fleet data and daily data 2D lists and returns
    two 2D lists which are Oversold business seats and Oversold economy seats.
    """
    num_oversold_econ = 0
    num_oversold_business = 0

    oversold_business_list = []
    oversold_econ_list = []

    for plane in fleet_data:
        plane_model = plane[0]  # Plane model identifier
        total_num_business = int(plane[1])  # Total business class capacity
        total_num_econ = int(plane[2])  # Total economy class capacity
        gate = plane[4]  # Gate associated with the plane

        # Check daily data for ticket sales at the corresponding gate
        for elements in daily_data:
            gate_from_data = elements[0]  # Gate from the daily data
            num_sold_business = int(elements[1])  # Business tickets sold
            num_sold_econ = int(elements[2])  # Economy tickets sold

            # If the gates match, calculate oversold tickets
            if gate_from_data == gate:
                # Calculate oversold business seats
                if num_sold_business > total_num_business:
                    num_oversold_business = num_sold_business - total_num_business

                # Calculate oversold economy seats
                if num_sold_econ > total_num_econ:
                    num_oversold_econ = num_sold_econ - total_num_econ

        # Append results for the current plane to the oversold lists
        oversold_business_list.append([plane_model, num_oversold_business])
        oversold_econ_list.append([plane_model, num_oversold_econ])

        
        num_oversold_business = 0
        num_oversold_econ = 0

    
    return oversold_business_list, oversold_econ_list

def overweight(passenger_data, fleet_data):
    """
     Takes paramters as 2D lists, passenger data and fleet data Identifies 
     overweight passengers and tracks the total for each plane.
     Returns two 2D lists: overweight passengers and overweight planes.
    """
    passenger_exceed_weight = []
    plane_exceed_weight = []

    for plane in fleet_data:
        plane_num = plane[0]  # Plane model/number
        max_weight = float(plane[7])  # Maximum allowable weight for the plane
        gate = plane[4]  # Gate number associated with the plane
        overweight_num = 0  # Counter for overweight passengers

        # Iterate through each passenger in the passenger data
        for elements in passenger_data:
            # Check if the passenger's gate matches the plane's gate and if they exceed the weight limit
            if gate == elements[2] and max_weight < float(elements[6]):
                overweight_num += 1  
                excess_weight = round(float(elements[6]) - float(max_weight), 2)  # Calculate excess weight
                passenger_exceed_weight.append([elements[0], elements[1], elements[2], excess_weight])
        
     
        plane_exceed_weight.append([plane_num, overweight_num])

 
    return passenger_exceed_weight, plane_exceed_weight


def layover(passenger_data, fleet_data):
    """
  Takes parameters as 2D lists, passenger and fleet data and identifies layover
  passengers and calculates counts per gate and plane. Returns two 2D lists: 
  layover planes and layover passengers.
    """
    layover_passengers = []
    gate_layover_counts = []  # A list of [gate, count] 
    # Process each passenger to check for layover status
    for passenger in passenger_data:
        if passenger[-1] == "Layover":  # Check if the passenger has a layover
            first_name = passenger[0]
            last_initial = passenger[1]
            gate = passenger[2]
            
            # Append to the layover passengers list
            layover_passengers.append([first_name, last_initial, gate])
            
            # Update the layover count for the gate
            gate_found = False
            for gate_count in gate_layover_counts:
                if gate_count[0] == gate:  # If gate is already in the list, update its count
                    gate_count[1] += 1
                    gate_found = True
                    break
            if not gate_found:  # If gate is not in the list, add it
                gate_layover_counts.append([gate, 1])

    # Create overlay_plane list with each plane's model and the layover count at its gate
    overlay_plane = []
    for fleet in fleet_data:
        model = fleet[0]
        gate = fleet[4]
        
        # Find the layover count for the current gate
        layover_count = 0
        for gate_count in gate_layover_counts:
            if gate_count[0] == gate:
                layover_count = gate_count[1]
                break
        
        overlay_plane.append([model, layover_count])

    return overlay_plane, layover_passengers


def time_delay(passenger_data, fleet_data):
    """
   Takes parameters as passenger data and fleet data and counts late layover
   passengers for each plane model. Returns a 2D list with plane models and 
   late layover counts.
   """
    late_layover_list = []

    # Iterate through each plane in the fleet data
    for plane in fleet_data:
        late_passengers = 0  
        plane_model = plane[0]  # Plane model identifier
        gate_num = plane[4]  # Gate number associated with the plane

        # Iterate through each passenger in the passenger data
        for elements in passenger_data:
            passenger_gate = elements[2]  # Gate number from passenger data

            if passenger_gate == gate_num:
                # Check if the passenger is both late and on a layover
                if elements[5] == 'Late' and elements[7] == 'Layover':
                    late_passengers += 1  # Increment the counter

        # Append the result for the current plane to the late_layover_list
        late_layover_list.append([plane_model, late_passengers])

    return late_layover_list

def graphical_teamID():
    """
    Takes no parameters and uses Turtle graphics to display oversold seats, 
    overweight planes, layover passengers, and delayed layovers in a table format.
    Has no returns. 
    """
    # Positioning parameters for graphical elements
    start_x = -SCREEN_WIDTH // 2 - 200  # Left margin for the first column
    start_y = SCREEN_HEIGHT // 2 - 200  # Top margin for the first row
    column_spacing = 200                # Space between columns
    row_spacing = 20                    # Space between rows

    # Retrieve data from external modules
    passenger_data_list = passenger_data()
    fleet_data_list = fleet_data()
    daily_data_list = daily_data(passenger_data_list)
    
    # Calculate data using imported functions
    oversold_business, oversold_econ = oversold(passenger_data_list, fleet_data_list, daily_data_list)
    overweight_passenger, overweight_plane = overweight(passenger_data_list, fleet_data_list)
    layover_plane, layover_passengers = layover(passenger_data_list, fleet_data_list)
    time_delay_data = time_delay(passenger_data_list, fleet_data_list)
    
    # Initialize the turtle's position and settings
    t.penup()
    counter = 0  # Counter to track the current column

    for element in oversold_business:
        # Prepare the list of output strings to display
        output_list = [
            str(oversold_business[counter][0]),  # Plane identifier
            "Oversold business seats: " + str(oversold_business[counter][1]),
            "Oversold economy seats: " + str(oversold_econ[counter][1]),
            "Overweight bags: " + str(overweight_plane[counter][1]),
            "Layover passengers: " + str(layover_plane[counter][1]),
            "Late layover passengers: " + str(time_delay_data[counter][1])
        ]
        counter += 1  # Move to the next column
        
        # Draw data for the current column
        for i in range(len(output_list)):
            x = start_x + counter * column_spacing 
            
            if i == 0:  # Special formatting for the plane identifier (first item)
                y = start_y  # Reset Y-coordinate to the top of the column
                
                # Draw an orange rectangle as the background for the plane identifier
                t.goto(x - 10, y + 10)
                t.pendown()
                t.color("orange")
                t.begin_fill()
                for _ in range(2):  # Draw a rectangle
                    t.forward(150)
                    t.right(90)
                    t.forward(20)
                    t.right(90)
                t.end_fill()
                t.color("black")
                t.penup()
            else:
                # Adjust Y-coordinate for subsequent rows
                y = start_y - i * row_spacing * 1.75
            
            # Write the current data item to the screen
            t.goto(x - 5, y - 6)
            t.color("white")
            t.write(output_list[i], font=("Arial", 10, "normal"))
            

# Constants for screen size and window title
SCREEN_WIDTH = 1440
SCREEN_HEIGHT = 1080
WINDOW_TITLE = "Mon-28 Graphical Interface "


# Set up the screen object with full-screen dimensions and a custom title
turtle.setup(SCREEN_WIDTH, SCREEN_HEIGHT)
screen = turtle.Screen()
screen.bgcolor("black")
screen.setup(width=1.0, height=1.0)  
screen.title(WINDOW_TITLE)
screen.tracer(0)
t = turtle.Turtle()

t.hideturtle()
# Calling function to create the table
graphical_teamID()


# Closing screen
screen.exitonclick()
turtle.done()


        
        
            
            
            
            
                