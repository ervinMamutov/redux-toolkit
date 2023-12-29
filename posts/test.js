import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Hello World", content: "Every day change mind" },
  { id: "2", title: "End of Context", content: "Your mind empty" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState, // Corrected property name
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
