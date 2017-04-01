import {Article} from '../landing/landing.state';
import {FETCH_VIEW_ARTICLE, FETCH_VIEW_ARTICLE_FAILED, UPDATE_VIEW_ARTICLE} from './article-viewer.action-types';
import {articleViewer, ArticleViewerState} from './article-viewer.state';

interface Action {
  type: string;
  article?: Article;
}

export function articleViewerReducer(state: ArticleViewerState = articleViewer, action: Action): ArticleViewerState {
  switch (action.type) {
    case FETCH_VIEW_ARTICLE:
      return {...state, isFetchingArticle: true};
    case UPDATE_VIEW_ARTICLE:
      return {...state, isFetchingArticle: false, article: action.article};
    case FETCH_VIEW_ARTICLE_FAILED:
      return {...state, isFetchingArticle: false};
    default:
      return state;
  }
}
