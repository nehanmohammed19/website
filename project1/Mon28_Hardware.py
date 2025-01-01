"""
authors: Nehan, Kelly, Victoria, Ian, Miah
Group: Mon-28
This program uses a Q-arm and a rotatry actuator to take luggage after bing scanned
where the Q-am picks it up drops it to its specified location.
"""

ip_address =  "localhost"
project_identifier = 'P3A'
#--------------------------------------------------------------------------------
# Inport Modules
import sys
import time
sys.path.append('../')
from Common.hardware_project_library import *
from Common.barcode_checker import *
from Common.standalone_actuator_lib import *

hardware = True
arm = qarm(project_identifier,ip_address,hardware)
table = servo_table(ip_address,None,hardware)
bot = qbot()
scanner = barcode_checker()

#--------------------------------------------------------------------------------
# STUDENT CODE BEGINS
#--------------------------------------------------------------------------------

# Range is number of suitcases
for i in range(4):
    arm.home()
    time.sleep(2)
    suitcase = scanner.barcode_check()
    table.rotate_table_speed(1)
    table.stop()
    # rotate servo table toward Q-arm
    table.rotate_table_angle(270)
    time.sleep(2)
    # Coordinates for servo table
    arm.move_arm(0.0,-0.403,0.223)
    time.sleep(2)
    arm.control_gripper(40)
    
    if suitcase == "Platform":
        # coordinates for platform
        arm.move_arm(0.468, -0.238, 0.411)
        time.sleep(2)
        arm.control_gripper(-40)
        # lower rotary actuator, then jitter it to bring retractable platofrm back up
        bot.activate_stepper_motor()
        time.sleep(2)
        bot.rotate_stepper_ccw(5)
        time.sleep(2)
        bot.rotate_stepper_cw(4.5)
        time.sleep(1)
        bot.rotate_stepper_ccw(0.5)
        bot.rotate_stepper_cw(1)
        time.sleep(1)
    else:
        # Coordinates for rejection bin
        arm.move_arm(0.0,0.539,0.091)
        time.sleep(2)
        arm.control_gripper(-40)
    # go back home after each luggage is dropped
    arm.home()
arm.terminate_arm()
    

#---------------------------------------------------------------------------------
# STUDENT CODE ENDS
#---------------------------------------------------------------------------------



    

    

