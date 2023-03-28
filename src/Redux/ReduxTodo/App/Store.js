import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Feature/todoSlice'

export default configureStore({
    reducer:{
        todo: todoReducer
    }
})