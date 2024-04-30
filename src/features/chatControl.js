import { createSlice } from "@reduxjs/toolkit";

const controlChatSlice = createSlice({
    name:"controlchat",
    initialState: {value:false} ,
    
    reducers:{
       newChatState: (state,action) => {
        state.value = action.payload
       }
    }
})

export const {open, close ,newChatState} = controlChatSlice.actions;
export default controlChatSlice.reducer;