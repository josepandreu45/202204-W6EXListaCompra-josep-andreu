import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../feature/listSlice";

const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export default store;
