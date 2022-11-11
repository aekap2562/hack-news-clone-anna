//TODO: get data from api call and set it to variable called allArticlesData
const allArticlesData = {}

export const loadData = () => {
  return {
    type: 'allArticles/loadData',
    payload: allArticlesData
  }
}

const initialState = [];
const allArticlesReducer = (allArticles = initialState, action) => {
  switch (action.type) {
    case 'allArticles/loadData':
      return action.payload;
    case 'favoriteArticles/addArticle':
      return allArticles.filter(article => article.id !== action.payload.id);
    case 'favoriteArticles/removeArticle':
      return [...allArticles, action.payload]
    default:
      return allArticles;
  }
}

export const selectAllArticles = (state) => state.allArticles;

/* TODO: remove this chunk of code
export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};*/

export default allArticlesReducer;