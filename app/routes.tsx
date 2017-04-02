import * as React from 'react';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import CreateArticleContainer from './article-editor/create/create-article.container';
import EditArticleContainer from './article-editor/edit/edit-article.container';
import ArticleViewerContainer from './article-viewer/article-viewer.container';
import LandingContainer from './landing/landing.container';
import PendingArticlesContainer from './pending-articles/pending-articles.container';
import ArticlesContainer from './articles/articles.container';

export const routes = (
  <Router history={browserHistory}>
    <Route name="Home" path="/">
      <IndexRoute component={LandingContainer}/>
      <Route name="All Articles" path="articles">
        <IndexRoute component={ArticlesContainer}/>
        <Route name="View" path=":articleId">
          <IndexRoute component={ArticleViewerContainer}/>
        </Route>
        <Route name="Edit" path="edit">
          <Route name="Edit Article" path=":articleId">
            <IndexRoute component={EditArticleContainer}/>
          </Route>
        </Route>
      </Route>
      <Route name="Create Article" path="create" component={CreateArticleContainer}/>
      <Route name="Pending Articles" path="pending" component={PendingArticlesContainer}/>
    </Route>
  </Router>
);
