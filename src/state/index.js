import {createSlice} from '@reduxjs/toolkit'; 

const initState = {
    mode: "dark", 
    userId: "89454h3458yfd45504e"
}; 

export const globalSlice = createSlice({
    name: 'global',
    initialState: initState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark": "light";
        }
    }
})

export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;