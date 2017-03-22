import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './pending-articles.actions';
import { PendingArticlesComponent } from './pending-articles.component';
import { PendingArticlesState } from './pending-articles.state';

interface Props {
    pendingArticles: PendingArticlesState;
    actions: Actions;
}

interface Actions {
    fetchPendingArticles();
}

export const PendingArticlesContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <PendingArticlesComponent
            pendingArticles={props.pendingArticles}
            fetchPendingArticles={props.actions.fetchPendingArticles} />
    );
};

function mapStateToProps(state, ownProps) {
    return {
        pendingArticles: state.pendingArticles
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
)(PendingArticlesContainer);
