import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState :{
        token :localStorage.getItem("token") || null,
        userId :localStorage.getItem("userId") || null,
        isLoggedIn  :token ? true : false

    },
    reducers :{
        setLogin  :(state,action )=>{
            state.token = action.payload;
            state.isLoggedIn=true;
            localStorage.setItem("token");
        } ,
        setUserId   :(state,action)=>{
            state.userId = action.payload;
            localStorage.setItem("userId");

        } ,
        setLogout    :(state,action)=>{
            state.token = null;
            state.userId = null;
            state.isLoggedIn=false;
            localStorage.clear();
        } 

    }
})

export const {setLogin,setUserId,setLogout} = authSlice.actions;
export default authSlice.reducer;