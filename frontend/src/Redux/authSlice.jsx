import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated:false,
    username:null,
    userId:null,
    token:null
}

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