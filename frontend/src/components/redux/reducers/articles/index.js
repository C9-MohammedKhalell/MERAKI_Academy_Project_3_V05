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
            state.articles=state.articles.map((elem,i)=>{
                if(elem.id==action.payload.id){
                    return {...action.payload,...state.articles}
                }
                return elem
            })
        } ,
        deleteArticleById    :(state,action)=>{
            state.articles=state.articles.map((elem,i)=>{
                if(elem.id !==action.payload){
                    return {...action.payload,...state.articles}
                }
                return elem
            })        } , 
        setComments    :(state,action)=>{

        } , 
        addComment    :(state,action)=>{

        } ,
    }
})

export const {setArticle,addArticle,updateArticleById,deleteArticleById,setComments,addComment} = articlesSlice.actions;
export default articlesSlice.reducer;