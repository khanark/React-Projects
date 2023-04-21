import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>): Todo[] {
      return [...state, action.payload];
    },
    checkCompleted(state, action: PayloadAction<string>): Todo[] {
      return state.map((todo) =>
        todo.id == action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo(state, action: PayloadAction<string>): Todo[] {
      return state.filter((todo) => todo.id !== action.payload);
    },
    clearTodos(): Todo[] {
      return [];
    },
  },
});

export const { addTodo, checkCompleted, deleteTodo, clearTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
