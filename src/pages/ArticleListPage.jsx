import React from 'react';
import articles from './article-content';
import { Link } from 'react-router-dom';
const ArticleListPage = () => {
	return (
		<>
			<section className="article-list-container">
				<div className="title-container">
					<h1>Articles</h1>
				</div>
				{articles.map((article) => (
					<div className="article-list-content">
						<Link to={`/article/${article.name}`}>
							<h2>{article.title}</h2>
							<p>{article.content[0].substring(0, 150)}...</p>
						</Link>
					</div>
				))}
			</section>
		</>
	);
};

export default ArticleListPage;
