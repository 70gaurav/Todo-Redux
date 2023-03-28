import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        value:"",
        tasks:[],
        edit:false
    },
    reducers: {
    inputhandler: (state , action) => {
        state.value = action.payload
        console.log(action.payload)
    },
    
    submithandler: (state) => {
        state.tasks = [...state.tasks,state.value]
        state.value = ""
        
    },
    deletehandler: (state,action) => {
      state.tasks = state.tasks = state.tasks.filter((task, ind) =>{
        return ind!== action.payload
       })
    },
    edithandler: (state,action) => {
        state.value = action.payload
    }
    }


})
export const {inputhandler , submithandler , deletehandler , edithandler } = todoSlice.actions
export default todoSlice.reducer