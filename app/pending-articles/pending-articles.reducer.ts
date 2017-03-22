import { Article } from '../landing/landing.state';
import {
    FETCH_PENDING_ARTICLES,
    FETCH_PENDING_ARTICLES_FAILED,
    UPDATE_PENDING_ARTICLES
} from './pending-articles.action-types';
import { pendingArticles, PendingArticlesState } from './pending-articles.state';

interface Action {
    type: string;
    articles?: Article[];
}

export function pendingArticlesReducer(state: PendingArticlesState = pendingArticles, action: Action): PendingArticlesState {
    switch (action.type) {
        case FETCH_PENDING_ARTICLES:
            return { ...state, isFetchingPendingArticles: true };
        case UPDATE_PENDING_ARTICLES:
            return { ...state, isFetchingPendingArticles: false, pendingArticles: action.articles };
        case FETCH_PENDING_ARTICLES_FAILED:
            return { ...state, isFetchingPendingArticles: false };
        default:
            return state;
    }
}
