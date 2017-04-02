import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ArticlesComponent} from './articles.component';
import {ArticlesState} from './articles.state';
import * as actions from './articles.actions';
import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';

interface Props {
  routes: any;
  articles: ArticlesState;
  actions: Actions;
}

interface Actions {
  fetchAllArticles();
}

export const ArticlesContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <BreadcrumbComponent routes={props.routes}/>

      <ArticlesComponent
        articles={props.articles}
        fetchAllArticles={props.actions.fetchAllArticles}/>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    routes: ownProps.routes,
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesContainer);
