import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "../../../data/types";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [] as Robots,
  reducers: {
    loadRobots: (currentRobots: Robots, action: PayloadAction<Robots>) => [
      ...action.payload,
    ],
  },
});

export const robotsReducer = robotsSlice.reducer;

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
