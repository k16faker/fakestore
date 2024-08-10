import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { cartSlice } from "./cartSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: { cart : cartSlice.reducer },
});
