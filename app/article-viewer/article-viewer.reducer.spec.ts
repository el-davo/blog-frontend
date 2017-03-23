import {FETCH_VIEW_ARTICLE, UPDATE_VIEW_ARTICLE, FETCH_VIEW_ARTICLE_FAILED} from './article-viewer.action-types';
import {articleViewerReducer} from './article-viewer.reducer';
import {articleViewer, ArticleViewerState} from './article-viewer.state';
import {Article} from '../landing/landing.state';

describe('Article Viewer Reducer', () => {

  describe('FETCH_VIEW_ARTICLE', () => {

    it('should fetch article from server', () => {
      const action = {type: FETCH_VIEW_ARTICLE};
      const state = {...articleViewer, isFetchingArticle: false} as ArticleViewerState;

      articleViewerReducer(state, action).should.eql({...state, isFetchingArticle: true});
    });
  });

  describe('UPDATE_VIEW_ARTICLE', () => {

    it('should display the article to the user', () => {
      const action = {
        type: UPDATE_VIEW_ARTICLE, article: {
          id: '1', name: 'name', summary: 'summary', content: 'content'
        } as Article
      };
      const state = {...articleViewer, isFetchingArticle: true} as ArticleViewerState;

      articleViewerReducer(state, action).should.eql({...state, isFetchingArticle: false, article: action.article});
    });
  });

  describe('FETCH_VIEW_ARTICLE_FAILED', () => {

    it('should alert the user that fetching an article has failed', () => {
      const action = {type: FETCH_VIEW_ARTICLE_FAILED};
      const state = {...articleViewer, isFetchingArticle: true} as ArticleViewerState;

      articleViewerReducer(state, action).should.eql({...state, isFetchingArticle: false});
    });
  });
});
