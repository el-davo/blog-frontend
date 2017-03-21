import { FETCH_NEWEST_ARTICLES, FETCH_NEWEST_ARTICLES_FAILED, UPDATE_NEWEST_ARTICLES } from './landing.action-types';
import { Article } from './landing.state';

export function fetchNewestArticles() {
    return { type: FETCH_NEWEST_ARTICLES };
}

export function updateNewestArticles(articles: Article[]) {
    return { type: UPDATE_NEWEST_ARTICLES, articles };
}

export function fetchNewestArticlesFailed() {
    return { type: FETCH_NEWEST_ARTICLES_FAILED };
}
