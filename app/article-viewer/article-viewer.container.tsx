import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
import * as actions from './article-viewer.actions';
import { ArticleViewerComponent } from './article-viewer.component';
import { ArticleViewerState } from './article-viewer.state';

interface Props {
    routes: any;
    articleId: string;
    articleViewer: ArticleViewerState;
    actions: Actions;
}

interface Actions {
    fetchViewArticle(articleId: string);
}

export const ArticleViewerContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <BreadcrumbComponent routes={props.routes} />

            <ArticleViewerComponent articleId={props.articleId}
                articleViewer={props.articleViewer}
                fetchViewArticle={props.actions.fetchViewArticle} />
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    return {
        routes: ownProps.routes,
        articleId: ownProps.params.articleId,
        articleViewer: state.articleViewer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(ArticleViewerContainer);
