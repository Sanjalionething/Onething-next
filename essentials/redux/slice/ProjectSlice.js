import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    getProject(state, action) {
      return action.payload;
    },
  },
});

export const { getProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;
