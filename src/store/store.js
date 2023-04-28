import { configureStore } from "@reduxjs/toolkit";
import advice from "../advices/advice";

const store = configureStore({
  reducer: {
    advice: advice,
  },
});

export default store;
