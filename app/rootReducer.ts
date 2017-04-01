import {reducer as toastr} from 'react-redux-toastr';
import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {adminReducer as admin} from './admin/admin.reducer';
import {articleEditorReducer as articleEditor} from './article-editor/article-editor.reducer';
import {articleViewerReducer as articleViewer} from './article-viewer/article-viewer.reducer';
import {landingReducer as landing} from './landing/landing.reducer';
import {pendingArticlesReducer as pendingArticles} from './pending-articles/pending-articles.reducer';

export const rootReducer = combineReducers({
  toastr,
  routing,
  landing,
  articleViewer,
  articleEditor,
  admin,
  pendingArticles
});
