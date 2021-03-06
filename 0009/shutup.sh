#!/bin/bash

# Turns off the annoying sonar
rostopic pub -1 /robot/sonar/head_sonar/set_sonars_enabled std_msgs/UInt16 0

# Adds Branding
rosrun baxter_examples xdisplay_image.py --file=`rospack find baxter_examples`/share/images/rosblocks.png

# Calibrate Gripper
rosrun baxter_examples gripper_keyboard.py
