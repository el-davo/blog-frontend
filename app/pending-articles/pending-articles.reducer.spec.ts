import {Article} from '../landing/landing.state';
import {pendingArticles, PendingArticlesState} from './pending-articles.state';
import {pendingArticlesReducer} from './pending-articles.reducer';
import {
  FETCH_PENDING_ARTICLES,
  UPDATE_PENDING_ARTICLES,
  FETCH_PENDING_ARTICLES_FAILED
} from './pending-articles.action-types';

describe('Pending Articles Reducer', () => {

  describe('FETCH_PENDING_ARTICLES', () => {

    it('should fetch a list of articles', () => {
      const action = {type: FETCH_PENDING_ARTICLES};
      const state = {...pendingArticles, isFetchingPendingArticles: false} as PendingArticlesState;

      pendingArticlesReducer(state, action).should.eql({
        ...state,
        isFetchingPendingArticles: true
      } as PendingArticlesState);
    });
  });

  describe('UPDATE_PENDING_ARTICLES', () => {

    it('should update the list of articles', () => {
      const action = {type: UPDATE_PENDING_ARTICLES, articles: [{}, {}] as Article[]};
      const state = {...pendingArticles, isFetchingPendingArticles: true} as PendingArticlesState;

      pendingArticlesReducer(state, action).should.eql({
        ...state,
        isFetchingPendingArticles: false,
        pendingArticles: action.articles
      } as PendingArticlesState);
    });
  });

  describe('FETCH_PENDING_ARTICLES_FAILED', () => {

    it('should inform the user that the fetch has failed', () => {
      const action = {type: FETCH_PENDING_ARTICLES_FAILED};
      const state = {...pendingArticles, isFetchingPendingArticles: true} as PendingArticlesState;

      pendingArticlesReducer(state, action).should.eql({
        ...state,
        isFetchingPendingArticles: false
      } as PendingArticlesState);
    });
  });
});
