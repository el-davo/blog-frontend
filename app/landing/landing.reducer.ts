import { FETCH_NEWEST_ARTICLES, FETCH_NEWEST_ARTICLES_FAILED, UPDATE_NEWEST_ARTICLES } from './landing.action-types';
import { Article, landing, LandingState } from './landing.state';

interface Action {
    type: string;
    articles?: Article[];
}

export function landingReducer(state: LandingState = landing, action: Action): LandingState {
    switch (action.type) {
        case FETCH_NEWEST_ARTICLES:
            return { ...state, isFetchingNewestArticles: true };
        case UPDATE_NEWEST_ARTICLES:
            return { ...state, articles: action.articles, isFetchingNewestArticles: false };
        case FETCH_NEWEST_ARTICLES_FAILED:
            return { ...state, isFetchingNewestArticles: false };
        default:
            return state;
    }
}
