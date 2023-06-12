import { slice } from "./todosSlice";
import * as todosSelectors from "./todosSelectors";
export { Todos } from "./Todos";

const todosReducer = slice.reducer;

const todosActions = {
  ...slice.actions,
};

export { todosActions, todosReducer, todosSelectors };
