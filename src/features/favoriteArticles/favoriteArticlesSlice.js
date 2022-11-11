import { createSlice } from '@reduxjs/toolkit';
//import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const favoriteArticlesSlice = createSlice({
  name: "favoriteArticles",
  initialState: [],
  reducers: {
    addArticle: (state, action) => {
      state.push(action.payload);
    },
    removeArticle: (state, action) => {
      return state.filter(article => article.id !== action.payload.id)
    },
  },
});


export const selectFavoriteArticles = (state) => state.favoriteArticles;

/* TODO: remove this chunk of code
export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};*/

export const {
   addArticle,
   removeArticle,
} = favoriteArticlesSlice.actions;

export default favoriteArticlesSlice.reducer;