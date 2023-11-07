import { createSlice } from "@reduxjs/toolkit";

const categorizeSlice = createSlice({
    name:"categorize",
    initialState: {value:[]} ,
    
    reducers:{
        newVal:(state,action) =>{
            state.value = action.payload
        }
    }
})

export const {newVal} = categorizeSlice.actions;
export default categorizeSlice.reducer;