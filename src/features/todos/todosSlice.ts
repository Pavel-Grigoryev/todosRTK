import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export enum TasksStatuses {
  InProgress = 0,
  Completed = 1,
}
export const slice = createSlice({
  name: "todos",
  initialState: {
    filter: "all" as FilterValuesType,
    tasks: [] as TaskType[],
  },
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      state.tasks.unshift({
        id: nanoid(),
        title: action.payload.title,
        status: TasksStatuses.InProgress,
      });
    },
    updateTask: (
      state,
      action: PayloadAction<{ taskId: string; model: TaskUpdateType }>
    ) => {
      const index = state.tasks.findIndex(
        (t) => t.id === action.payload.taskId
      );
      if (index > -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload.model };
      }
    },
    deleteTask: (state, action: PayloadAction<{ taskId: string }>) => {
      const tasks = state.tasks;
      const index = tasks.findIndex((t) => t.id === action.payload.taskId);
      if (index > -1) {
        tasks.splice(index, 1);
      }
    },
  },
});

//Types

export type TaskType = {
  id: string;
  title: string;
  status: TasksStatuses;
};

type TaskUpdateType = Partial<Omit<TaskType, "id">>;

export type FilterValuesType = "all" | "active" | "completed";
