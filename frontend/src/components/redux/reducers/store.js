import { configureStore } from "@reduxjs/toolkit";


// Import Reducers of States
import articlesReducer from "./articles/index"
import authReducer from "./auth/index";
export default configureStore({
    // the reducer object is empty for now but after creating reducers we add them to this object
    reducer :{
        articles : articlesReducer,
        auth : authReducer
    }
})