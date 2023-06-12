import React, { useCallback } from "react";
import Paper from "@mui/material/Paper";
import { AddItemForm } from "common/components/AddItemForm";
import Grid from "@mui/material/Grid";
import s from "./Todos.module.css";
import { todosActions, todosSelectors } from "features/todos/index";
import { useActions } from "common/hooks/useActions";
import { addTaskFormSX } from "common/styles/stylesSX";
import { useAppSelector } from "common/hooks/useAppSelector";
import { Task } from "features/todos/Task";

export const Todos = () => {
  const { addTask } = useActions(todosActions);
  const filteredTasks = useAppSelector(todosSelectors.selectFilteredTasks);

  const addTaskHandler = useCallback(
    (title: string) => {
      addTask({ title });
    },
    [addTask]
  );

  const tasks = filteredTasks.map((task) => <Task key={task.id} task={task} />);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={6}>
        <Paper className={s.paper}>
          <div className={s.addTaskBlock}>
            <AddItemForm
              addItem={addTaskHandler}
              label={"What needs to be done?"}
              sx={addTaskFormSX}
            />
          </div>
          <ul className={s.tasksList}>{tasks}</ul>
        </Paper>
      </Grid>
    </Grid>
  );
};
