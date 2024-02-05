import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
    name:"articles",
    initialState :{
        articles :[]
    },
    reducers :{
        setArticles  :(state,action )=>{
            state.articles = action.payload;
        } ,
        addArticle   :(state,action)=>{
            state.articles.push(action.payload)
        } ,
        updateArticleById    :(state,action)=>{

        } ,
        deleteArticleById    :(state,action)=>{

        } , 
        setComments    :(state,action)=>{

        } , 
        addComment    :(state,action)=>{

        } ,
    }
})

export const {setLogin,setUserId,setLogout} = articlesSlice.actions;
export default articlesSlice.reducer;