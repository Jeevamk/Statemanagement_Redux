import { createSlice} from '@reduxjs/toolkit'

const CountSlice = createSlice({
    name:'Count',
    initialState :{
        count : 0
    },
    reducers:{
        addCount:(state) => {
            state.count = state.count+1
        },
        removeCount :(state) => {
            state.count = state.count-1
        },
        clearCount : (state) =>{
            state.count = 0
        }
    }
})

export const {addCount,removeCount,clearCount} = CountSlice.actions;
export default CountSlice.reducer;