import React from 'react';
import hackerNewsIcon from './hacker-news-icon.jpg';
import { Image, Box } from '@chakra-ui/react';
import { AllArticles } from '../features/allArticles/AllArticles.js';
import { FavoriteArticles } from '../features/favoriteArticles/FavoriteArticles.js';

function App() {
  return (
    <div>
      <img style={{width: 50, height: 50}} src={hackerNewsIcon} alt='hacker news logo' />
      <h1>Hacker News</h1>
      <h2>Favorite Articles</h2>
      <FavoriteArticles />
      <h2>All Articles</h2>
      <AllArticles />
    </div>
  )
}

export default App;
