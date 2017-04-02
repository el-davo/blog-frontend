import {FETCH_ALL_ARTICLES, UPDATE_ALL_ARTICLES, FETCH_ALL_ARTICLES_FAILED} from './articles.action-types';
import {fetchAllArticles, updateAllArticles, fetchAllArticlesFailed} from './articles.actions';
import {Article} from '../landing/landing.state';

describe('Articles Actions', () => {

  describe('fetchAllArticles()', () => {

    it('should fetch all articles', () => {
      fetchAllArticles().should.eql({type: FETCH_ALL_ARTICLES});
    });
  });

  describe('updateAllArticles()', () => {

    it('should update list of articles', () => {
      const articles = [{}, {}] as Article[];

      updateAllArticles(articles).should.eql({type: UPDATE_ALL_ARTICLES, articles});
    });
  });

  describe('fetchAllArticlesFailed()', () => {

    it('should alert the user that fetching articles failed', () => {
      fetchAllArticlesFailed().should.eql({type: FETCH_ALL_ARTICLES_FAILED});
    });
  });
});
