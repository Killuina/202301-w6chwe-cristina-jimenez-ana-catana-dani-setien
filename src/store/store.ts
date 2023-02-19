import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { robotsReducer } from "./features/robots/robotsSlice";

export const store = configureStore({
  reducer: { robots: robotsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const robotsHardcoded = [
  {
    id: "63efcf45e871c66135a96f55",
    name: "C-3PO",
    image: "https://tinyurl.com/4ehhex6d",
    attributes: {
      speed: 4,
      resistance: 7,
      creationDate: "34 BBY",
    },
  },
];
