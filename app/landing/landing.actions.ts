import {FETCH_NEWEST_ARTICLES, UPDATE_NEWEST_ARTICLES} from './landing.action-types';
import {Article} from './landing.state';

export function fetchNewestArticles() {
    return {type: FETCH_NEWEST_ARTICLES};
}

export function updateNewestArticles(articles: Article[]) {
    return {type: UPDATE_NEWEST_ARTICLES, articles};
}