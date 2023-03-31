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
        if(state.value.length > 1){
            if(state.value.length > 0 && state.edit === false){
                state.tasks = [...state.tasks,state.value]
                state.value = ""
             }
             else{
                state.tasks[state.edit] = state.value
                state.value = ""
                state.edit = false
                 }
        }
        else{
            alert("input can't be empty")
        }
        
    },
    deletehandler: (state,action) => {
      state.tasks = state.tasks = state.tasks.filter((task, ind) =>{
        return ind!== action.payload
       })
    },
    edithandler: (state,action) => {
        state.value = action.payload
    },
    indexhandler: (state,action) => {
        state.edit = action.payload
    }
        
    }


})
export const {inputhandler , submithandler , deletehandler , edithandler ,indexhandler  } = todoSlice.actions
export default todoSlice.reducer