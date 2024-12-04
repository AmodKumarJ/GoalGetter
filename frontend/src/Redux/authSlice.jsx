import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated:false,
    user:null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signup:(state,action)=>{
            state.isAuthenticated=true;
            state.user = action.payload;
            localStorage.setItem('isAuthenticated', true); 
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        signin:(state,action)=>{
            state.isAuthenticated=true;
            state.user = action.payload;
            localStorage.setItem('isAuthenticated', true); 
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout:(state)=>{
            state.isAuthenticated=false
            state.user=null
        }
    }
})

export const {signup,signin,logout} = authSlice.actions;

export default authSlice.reducer; 