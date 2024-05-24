import { createSlice } from "@reduxjs/toolkit";

const addressDialogSlice = createSlice({
    name:"addressdialog",
    initialState: {value:false} ,
    
    reducers:{
       newAddressDialogState: (state,action) => {
        state.value = action.payload
       }
    }
})

export const {open, close ,newAddressDialogState} = addressDialogSlice.actions;
export default addressDialogSlice.reducer;