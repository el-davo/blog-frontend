import {FETCH_ALL_ARTICLES, UPDATE_ALL_ARTICLES, FETCH_ALL_ARTICLES_FAILED} from './articles.action-types';
import {Article} from '../landing/landing.state';
import {ArticlesState, articles} from './articles.state';

interface Action {
  type: string;
  articles?: Article[];
}

export function articlesReducer(state: ArticlesState = articles, action: Action): ArticlesState {
  switch (action.type) {
    case FETCH_ALL_ARTICLES:
      return {...state, isFetchingAllArticles: true};
    case UPDATE_ALL_ARTICLES:
      return {...state, isFetchingAllArticles: false, list: action.articles};
    case FETCH_ALL_ARTICLES_FAILED:
      return {...state, isFetchingAllArticles: false};
    default:
      return state;
  }
}
