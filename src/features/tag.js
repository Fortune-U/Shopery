import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name:"tag",
    initialState: {value:[]} ,
    
    reducers:{
        newTag:(state,action) =>{
            state.value = action.payload
        }
    }
})

export const {newTag} = tagSlice.actions;
export default tagSlice.reducer;