import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addArticle } from '../favoriteArticles/favoriteArticlesSlice.js';
import { loadData, selectFilteredAllArticles } from './allArticlesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Article from "../../components/Article";

//TODO: change the URL for the heart icon (this one needs to be only an outline of a heart shape)
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllArticles = () => {
  const allArticles = {}
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  const onAddArticleHandler = (article) => {
    dispatch(addArticle(article));
  };

  /* TODO: use this code instead
  return (
    <div className="articles-container">
      {allArticles.map((article) => (
        <Article article={article} key={article.id}>
          <FavoriteButton
            onClickHandler={() => onAddArticleHandler(article)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Article>
      ))}
    </div>
  );*/

  return (
    <div className="articles-container">
     
    </div>
  );
};
