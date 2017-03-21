import { Article } from '../landing/landing.state';
import { FETCH_VIEW_ARTICLE, FETCH_VIEW_ARTICLE_FAILED, UPDATE_VIEW_ARTICLE } from './article-viewer.action-types';

export function fetchViewArticle(articleId) {
    return { type: FETCH_VIEW_ARTICLE, articleId };
}

export function updateViewArticle(article: Article) {
    return { type: UPDATE_VIEW_ARTICLE, article };
}

export function fetchViewArticleFailed() {
    return { type: FETCH_VIEW_ARTICLE_FAILED };
}
