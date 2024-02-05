import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
    name:"articles",
    initialState :{
        articles :[]
    },
    reducers :{
        setArticle  :(state,action )=>{
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

export const {setArticle,addArticle,updateArticleById,deleteArticleById,setComments,addComment} = articlesSlice.actions;
export default articlesSlice.reducer;