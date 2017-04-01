import {Article} from '../landing/landing.state';
import {
  FETCH_PENDING_ARTICLES,
  FETCH_PENDING_ARTICLES_FAILED,
  UPDATE_PENDING_ARTICLES
} from './pending-articles.action-types';

export function fetchPendingArticles() {
  return {type: FETCH_PENDING_ARTICLES};
}

export function updatePendingArticles(articles: Article[]) {
  return {type: UPDATE_PENDING_ARTICLES, articles};
}

export function fetchPendingArticlesFailed() {
  return {type: FETCH_PENDING_ARTICLES_FAILED};
}
