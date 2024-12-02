import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../tasks";
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 2000);
  });
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
