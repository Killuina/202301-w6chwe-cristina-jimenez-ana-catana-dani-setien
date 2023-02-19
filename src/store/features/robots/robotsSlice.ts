import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots, RobotStructure } from "../../../data/types";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [] as Robots,
  reducers: {
    loadRobots: (currentRobots: Robots, action: PayloadAction<Robots>) => [
      ...action.payload,
    ],

    addRobot: (
      currentRobots: Robots,
      action: PayloadAction<RobotStructure>
    ) => [...currentRobots, action.payload],
  },
});

export const robotsReducer = robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;
