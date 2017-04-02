import {FETCH_ALL_ARTICLES, UPDATE_ALL_ARTICLES, FETCH_ALL_ARTICLES_FAILED} from './articles.action-types';
import {articles, ArticlesState} from './articles.state';
import {Article} from '../landing/landing.state';
import {articlesReducer} from './articles.reducer';

describe('Articles Reducer', () => {

  describe('FETCH_ALL_ARTICLES', () => {

    it('should fetch the list of articles', () => {
      const action = {type: FETCH_ALL_ARTICLES};
      const state = {...articles, isFetchingAllArticles: false} as ArticlesState;
      articlesReducer(state, action).should.eql({...state, isFetchingAllArticles: true} as ArticlesState);
    });
  });

  describe('UPDATE_ALL_ARTICLES', () => {

    it('should update the list of articles', () => {
      const action = {type: UPDATE_ALL_ARTICLES, articles: [{}, {}] as Article[]};
      const state = {...articles, isFetchingAllArticles: true, list: []} as ArticlesState;
      articlesReducer(state, action).should.eql({
        ...state,
        isFetchingAllArticles: false,
        list: action.articles
      } as ArticlesState);
    });
  });

  describe('FETCH_ALL_ARTICLES_FAILED', () => {

    it('should alert the user that fetching articles failed', () => {
      const action = {type: FETCH_ALL_ARTICLES_FAILED};
      const state = {...articles, isFetchingAllArticles: true} as ArticlesState;
      articlesReducer(state, action).should.eql({...state, isFetchingAllArticles: false} as ArticlesState);
    });
  });
});
