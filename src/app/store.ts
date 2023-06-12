import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { todosReducer } from "features/todos";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

//Types

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>;
