import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from '../admin/admin.actions';
import * as actions from './pending-articles.actions';
import {PendingArticlesComponent} from './pending-articles.component';
import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';
import {PendingArticlesState} from './pending-articles.state';
import {Article} from '../landing/landing.state';

interface Props {
  routes: any;
  pendingArticles: PendingArticlesState;
  actions: Actions;
}

interface Actions {
  fetchPendingArticles();
  showDeleteArticleModal(article: Article);
}

export const PendingArticlesContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <BreadcrumbComponent routes={props.routes}/>

      <PendingArticlesComponent
        pendingArticles={props.pendingArticles}
        fetchPendingArticles={props.actions.fetchPendingArticles}
        showDeleteArticleModal={props.actions.showDeleteArticleModal}/>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    routes: ownProps.routes,
    pendingArticles: state.pendingArticles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...adminActions, ...actions}, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(PendingArticlesContainer);
