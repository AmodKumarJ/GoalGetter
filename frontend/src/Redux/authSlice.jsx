import { createSlice } from '@reduxjs/toolkit'

const persistedAuthState = {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    username: localStorage.getItem('username') || null,
    userId: localStorage.getItem('userId') || null,
    token: localStorage.getItem('token') || null,
  };

const initialState = persistedAuthState

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signup:(state,action)=>{
            const { username, userId} = action.payload;
            state.isAuthenticated=true;
            state.username = username;
            state.userId = userId;
           
            localStorage.setItem('isAuthenticated', true); 
            localStorage.setItem('username', username);
            localStorage.setItem('userId',userId);
            
        },
        signin:(state,action)=>{
            state.isAuthenticated=true;
            const { username, userId, token } = action.payload;
            state.username = username;
            state.userId = userId;
            state.token = token;
            localStorage.setItem('isAuthenticated', true); 
            localStorage.setItem('username', username);
            localStorage.setItem('userId',userId);
            localStorage.setItem('token',token)
        },
        logout:(state)=>{
            state.isAuthenticated=false
            state.username = null;
            state.userId = null;
            state.token = null;
            localStorage.removeItem('isAuthenticated'); 
            localStorage.removeItem('username');
            localStorage.removeItem('userId');
            localStorage.removeItem('token')
        }
    }
})

export const {signup,signin,logout} = authSlice.actions;

export default authSlice.reducer; 