import { createSlice } from "@reduxjs/toolkit";

const addressIdSlice = createSlice({
    name:"addressid",
    initialState:{
        value:''
    },

    reducers:{
        newAddressId:(state,action) =>{
            state.value = action.payload
        }
        
    }
})

export const {newAddressId} = addressIdSlice.actions;
export default addressIdSlice.reducer;