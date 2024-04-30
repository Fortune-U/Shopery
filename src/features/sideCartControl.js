import { createSlice } from "@reduxjs/toolkit";

const controlSideCartSlice = createSlice({
    name:"controlsidecart",
    initialState: {value:false} ,
    
    reducers:{
       newCartWindowState: (state,action) => {
        state.value = action.payload
       }
    }
})

export const {newCartWindowState} = controlSideCartSlice.actions;
export default controlSideCartSlice.reducer;