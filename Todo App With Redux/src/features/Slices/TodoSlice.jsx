import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello and Welcome to redux tutorial",
    },
  ],
};

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoslice.actions;
export default todoslice.reducer;
