import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
	const params = useParams();
	const { articleId } = params;
	const article = articles.find((article) => article.name === articleId);

	return (
		<>
			<div className="article-container">
				<h1>{article.title}</h1>
				{article.content.map((paragraph, id) => (
					<p key={id}>{paragraph}</p>
				))}
			</div>
		</>
	);
};

export default ArticlePage;
