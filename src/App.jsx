import React from 'react';
import './App.css';
import './assets/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} exact />
					<Route path="/about" element={<AboutPage />} exact />
					<Route
						path="/articleList"
						element={<ArticleListPage />}
						exact
					/>
					<Route
						path="/article/:articleId"
						element={<ArticlePage />}
						exact
					/>
					<Route
						path="/page_not_found"
						element={<NotFoundPage />}
						exact
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
