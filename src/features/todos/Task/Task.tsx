import React, { ChangeEvent, FC, memo, useCallback } from "react";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { TasksStatuses, TaskType } from "features/todos/todosSlice";
import { todosActions } from "features/todos/index";
import { useActions } from "common/hooks/useActions";
import { EditableSpan } from "common/components/EditableSpan";

export type PropsType = {
  task: TaskType;
};

export const Task: FC<PropsType> = memo(({ task }) => {
  const { deleteTask, updateTask } = useActions(todosActions);

  const onChangeTaskStatusHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const status = e.currentTarget.checked
        ? TasksStatuses.Completed
        : TasksStatuses.InProgress;
      updateTask({
        taskId: task.id,
        model: { status },
      });
    },
    [task.id, updateTask]
  );

  const onChangeTaskTitleHandler = useCallback(
    (title: string) => {
      updateTask({
        taskId: task.id,
        model: { title },
      });
    },
    [task.id, updateTask]
  );

  const removeTaskHandler = () => {
    deleteTask({ taskId: task.id });
  };

  return (
    <ListItem
      className={task.status === TasksStatuses.Completed ? "is-done" : ""}
      style={{
        textDecoration:
          task.status === TasksStatuses.Completed ? "line-through" : "none",
        justifyContent: "flex-start",
      }}
    >
      <Checkbox
        onChange={onChangeTaskStatusHandler}
        checked={task.status === TasksStatuses.Completed}
        size={"small"}
        color="secondary"
      />
      <EditableSpan
        value={task.title}
        onChange={onChangeTaskTitleHandler}
        spanStyle={{ flexGrow: "1" }}
      />
      <IconButton onClick={removeTaskHandler} size="small">
        <DeleteOutlineOutlinedIcon style={{ width: "20px" }} />
      </IconButton>
    </ListItem>
  );
});
