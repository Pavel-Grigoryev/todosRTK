import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export enum TasksStatuses {
  InProgress = 0,
  Completed = 1,
}
export const slice = createSlice({
  name: "todos",
  initialState: {
    filter: "all",
    tasks: [
      {
        id: nanoid(),
        title: "Тестовое задание",
        status: TasksStatuses.InProgress,
      },
      {
        id: nanoid(),
        title: "Прекрасный код",
        status: TasksStatuses.Completed,
      },
      {
        id: nanoid(),
        title: "Покрытие тестами",
        status: TasksStatuses.Completed,
      },
    ],
  } as TasksStateType,
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
    changeFilter: (
      state,
      action: PayloadAction<{ filter: FilterValuesType }>
    ) => {
      state.filter = action.payload.filter;
    },
    clearCompletedtask: (state) => {
      state.tasks = state.tasks.filter(
        (task) => task.status !== TasksStatuses.Completed
      );
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

export type TasksStateType = {
  filter: FilterValuesType;
  tasks: TaskType[];
};
