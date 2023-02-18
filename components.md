# Data

# Data layer

- List of robots:
- Name
- Image url
- Speed
- Endurance

# Data modifications

- Load the list of robots
- Delete robot from the list
- Add robot to robot list
- Modify robot

# Components

# Robots List

- Receives a list of robots
- Shows a robot card for each robot on the received list
- Sends a robot to each robot card component

# Robot Card

- Receives delete robot action
- Show button to delete robot
- Show button to modify robot
- Show robot name on a heading
- Show robot image, speed, endurance, and creation date

# Button

- Receives an action
- On click executes the received action

# Form

- Receives the add robot action
- Shows an input for the new robot name with label "Name"
- Shows an input for the new robot image url with label "Image (url)"
- Shows an input for the new robot speed with label "Speed"
- Shows an input for the new robot endurance with label "Endurance"
