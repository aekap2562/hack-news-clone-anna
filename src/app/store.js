import { configureStore } from '@reduxjs/toolkit'; 
import { createStore, combineReducers} from 'redux'; 
import favoriteArticlesReducer from '../features/favoriteArticles/favoriteArticlesSlice.js'; 
import allArticlesReducer from '../features/allArticles/allArticlesSlice.js'; 

export default configureStore({
    reducer: {
        favoriteArticles: favoriteArticlesReducer, 
        allArticles: allArticlesReducer
    }
})