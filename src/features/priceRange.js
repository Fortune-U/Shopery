import { createSlice } from "@reduxjs/toolkit";

const priceRangeSlice = createSlice({
    name:"priceRange",
    initialState:{
        value:[]
    },

    reducers:{
        newPriceRange:(state,action) =>{
            state.value = action.payload
        }
        
    }
})

export const {newPriceRange} = priceRangeSlice.actions;
export default priceRangeSlice.reducer;