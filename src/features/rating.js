import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
    name:"rating",
    initialState: {
        value:{},
    },
    reducers:{
        stars:(state,action) =>{
            state.value = action.payload
        }
    }
})

export const {stars} = ratingSlice.actions;
export default ratingSlice.reducer;