//import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const initialState = [];
const favoriteArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'favoriteArticles/addArticle':
      return [...state, action.payload]
    case 'favoriteArticles/removeArticle':
      return state.filter(article => article.id !== action.payload.id)
    default:
      return state;
  }
}

export function addArticle(article) {
  return {
    type: 'favoriteArticles/addArticle',
    payload: article
  }
}

export function removeArticle(article) {
  return {
    type: 'favoriteArticles/removeArticle',
    payload: article
  }
}

export const selectFavoriteArticles = (state) => state.favoriteArticles;

/* TODO: remove this chunk of code
export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};*/

export default favoriteArticlesReducer;