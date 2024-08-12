import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const store = configureStore({
    reducer: { cart : cartSlice.reducer },
});


export const useAppDispatch : () => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;