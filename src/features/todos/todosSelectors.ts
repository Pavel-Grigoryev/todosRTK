import { RootStateType } from "app/store";
import { createSelector } from "@reduxjs/toolkit";
import { TasksStatuses } from "features/todos/todosSlice";

export const selectTasks = (state: RootStateType) => state.todos.tasks;
export const selectFilter = (state: RootStateType) => state.todos.filter;
export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    if (filter === "active") {
      return tasks.filter((task) => task.status === TasksStatuses.Completed);
    }
    if (filter === "completed") {
      return tasks.filter((task) => task.status === TasksStatuses.Completed);
    }
    return tasks;
  }
);
