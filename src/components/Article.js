import React from "react";

export default function Article({ article, children }) {
  return (
    <div key={article.id} className="article" tabIndex={0}>
      <span className="article-container">
        <h3 className="article-name">{article.name}</h3>
        <div className="image-container">
          <img src={article.img} alt="" className="article-image" />
        </div>
      </span>
      {children}
    </div>
  );
}