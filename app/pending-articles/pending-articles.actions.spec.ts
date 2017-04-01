import {
  FETCH_PENDING_ARTICLES,
  UPDATE_PENDING_ARTICLES,
  FETCH_PENDING_ARTICLES_FAILED
} from './pending-articles.action-types';
import {
  fetchPendingArticles,
  updatePendingArticles,
  fetchPendingArticlesFailed
} from './pending-articles.actions';
import {Article} from '../landing/landing.state';

describe('Pending Articles Actions', () => {

  describe('fetchPendingArticles()', () => {

    it('should fetch a list of pending articles', () => {
      fetchPendingArticles().should.eql({type: FETCH_PENDING_ARTICLES});
    });
  });

  describe('updatePendingArticles()', () => {

    it('should update the list of pending articles', () => {
      const articles = [{}, {}] as Article[];
      updatePendingArticles(articles).should.eql({type: UPDATE_PENDING_ARTICLES, articles});
    });
  });

  describe('fetchPendingArticlesFailed', () => {

    it('should inform the user that the fetch failed', () => {
      fetchPendingArticlesFailed().should.eql({type: FETCH_PENDING_ARTICLES_FAILED});
    });
  });
});
