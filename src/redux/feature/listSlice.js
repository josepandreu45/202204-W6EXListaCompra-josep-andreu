import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    loadListsData: (lists, action) => [...action.payload],
  },
});

export const { loadListsData: loadListDataActionCreator } = listSlice.actions;

export default listSlice.reducer;
