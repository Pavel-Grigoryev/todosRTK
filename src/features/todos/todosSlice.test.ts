import { TasksStateType, TasksStatuses } from "features/todos/todosSlice";
import { todosActions, todosReducer } from "features/todos/index";

let startState = {} as TasksStateType;
beforeEach(() => {
  startState = {
    filter: "all",
    tasks: [
      {
        id: "1",
        title: "Тестовое задание",
        status: TasksStatuses.InProgress,
      },
      {
        id: "2",
        title: "Прекрасный код",
        status: TasksStatuses.Completed,
      },
    ],
  };
});

test("correct task should be removed", () => {
  const endState = todosReducer(
    startState,
    todosActions.deleteTask({ taskId: "1" })
  );
  expect(endState.tasks.length).toBe(1);
  expect(endState.tasks[0].id).toBe("2");
});

test("completed tasks should be removed", () => {
  const endState = todosReducer(startState, todosActions.clearCompletedtask());
  expect(endState.tasks.length).toBe(1);
  expect(endState.tasks[0].id).toBe("1");
});

test("correct task should be added", () => {
  const endState = todosReducer(
    startState,
    todosActions.addTask({ title: "Покрытие тестами" })
  );
  expect(endState.tasks.length).toBe(3);
  expect(endState.tasks[0].id).toBeDefined();
  expect(endState.tasks[0].title).toBe("Покрытие тестами");
});

test("title of a task should be updated", () => {
  const endState = todosReducer(
    startState,
    todosActions.updateTask({
      taskId: "1",
      model: { title: "Тестовое задание 2" },
    })
  );
  expect(endState.tasks.length).toBe(2);
  expect(endState.tasks[0].title).toBe("Тестовое задание 2");
  expect(endState.tasks[1].title).toBe("Прекрасный код");
});

test("status of a task should be updated", () => {
  const endState = todosReducer(
    startState,
    todosActions.updateTask({
      taskId: "2",
      model: { status: TasksStatuses.InProgress },
    })
  );
  expect(endState.tasks.length).toBe(2);
  expect(endState.tasks[0].status).toBe(TasksStatuses.InProgress);
  expect(endState.tasks[1].status).toBe(TasksStatuses.InProgress);
});

test("filter of a todos should be changed", () => {
  const endState = todosReducer(
    startState,
    todosActions.changeFilter({ filter: "active" })
  );
  expect(endState.filter).toBe("active");
});
