import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
  task : ITask[]
}
const initialState: InitialState = {
  task: [
    {
      id: "Lol",
      title: "Initialize frontend",
      description: "Create Home page , and routing",
      duedate: "2025-5-17",
      isCompleted: false,
      priority: "High",
    },
  ],
};
const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state : RootState) => {
  return state.tasks.task
}

export default todoSlice.reducer;

