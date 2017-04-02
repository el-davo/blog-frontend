import {FETCH_ALL_ARTICLES, UPDATE_ALL_ARTICLES, FETCH_ALL_ARTICLES_FAILED} from './articles.action-types';
import {Article} from '../landing/landing.state';

export function fetchAllArticles() {
  return {type: FETCH_ALL_ARTICLES};
}

export function updateAllArticles(articles: Article[]) {
  return {type: UPDATE_ALL_ARTICLES, articles};
}

export function fetchAllArticlesFailed() {
  return {type: FETCH_ALL_ARTICLES_FAILED};
}
