import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todo: TTodo[];
};

const initialState: TInitialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todo.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter(item => item._id !== action.payload);
    },
    togoleStatus: (state, action: PayloadAction<string>) => {
      const task = state.todo.find(item => item._id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});
export const { addTodo, removeTodo, togoleStatus } = todoSlice.actions;

export default todoSlice.reducer;
