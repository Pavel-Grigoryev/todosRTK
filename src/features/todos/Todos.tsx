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
import { SuperButton } from "common/components/SuperButton";
import { FilterValuesType } from "features/todos/todosSlice";

export const Todos = () => {
  const { addTask, changeFilter, clearCompletedtask } =
    useActions(todosActions);
  const filteredTasks = useAppSelector(todosSelectors.selectFilteredTasks);
  const filter = useAppSelector(todosSelectors.selectFilter);
  const tasks = useAppSelector(todosSelectors.selectTasks);

  const addTaskHandler = useCallback(
    (title: string) => {
      addTask({ title });
    },
    [addTask]
  );

  const changeFilterHandler = (filter: FilterValuesType) => {
    changeFilter({ filter });
  };

  const clearCompletedtasksHandler = () => {
    clearCompletedtask();
  };

  const todosTasks = filteredTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));

  return (
    <Grid container justifyContent={"center"}>
      <Grid item md={7} sm={10} xs={12}>
        <Paper className={s.paper}>
          <div className={s.addTaskBlock}>
            <AddItemForm
              addItem={addTaskHandler}
              label={"What needs to be done?"}
              sx={addTaskFormSX}
            />
          </div>
          <ul className={s.tasksList}>{todosTasks}</ul>
          {tasks.length !== 0 && (
            <div className={s.buttonsBlock}>
              <span>
                {todosTasks.length} {todosTasks.length > 1 ? "items " : "item "}
                left
              </span>
              <div className={s.filterButtons}>
                <SuperButton
                  title={"All"}
                  color={filter === "all" ? "secondary" : "primary"}
                  variant={"contained"}
                  onclick={() => changeFilterHandler("all")}
                />
                <SuperButton
                  color={filter === "active" ? "secondary" : "primary"}
                  title={"Active"}
                  variant={"contained"}
                  onclick={() => changeFilterHandler("active")}
                />
                <SuperButton
                  color={filter === "completed" ? "secondary" : "primary"}
                  title={"Completed"}
                  variant={"contained"}
                  onclick={() => changeFilterHandler("completed")}
                />
              </div>
              <SuperButton
                color={"primary"}
                title={"Clear completed"}
                variant={"contained"}
                onclick={clearCompletedtasksHandler}
              />
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};
