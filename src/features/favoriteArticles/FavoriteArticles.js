import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeArticle, selectFilteredFavoriteArticles } from './favoriteArticlesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Article from "../../components/Article";

//TODO: get a filled-in heart icon to put here
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteArticles = () =>{
  const favoriteArticles = {}
  const dispatch = useDispatch();

  const onRemoveArticleHandler = (article) => {
    dispatch(removeArticle(article));
  };

  /* TODO: use the next 4 lines in the real code
  return (
    <div className="articles-container">
      {favoriteArticles.map(createArticleComponent)}
    </div>
  );*/

  return (
    <div className="articles-container">
    </div>
  );

  // Helper Function
  function createArticleComponent(article) {
    return (
      <Article article={article} key={article.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveArticleHandler(article)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Article>
    )
  } 
};