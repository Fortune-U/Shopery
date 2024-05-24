import { createSlice } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
    name:"userid",
    initialState:{
        value:''
    },

    reducers:{
        newUserId:(state,action) =>{
            state.value = action.payload
        }
        
    }
})

export const {newUserId} = userIdSlice.actions;
export default userIdSlice.reducer;