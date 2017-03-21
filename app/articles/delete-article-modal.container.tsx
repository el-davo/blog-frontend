import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideDeleteArticleModal, requestDeleteArticle } from '../admin/admin.actions';
import * as adminActions from '../admin/admin.actions';
import { AdminState } from '../admin/admin.state';
import { Article } from '../landing/landing.state';
import { DeleteArticleModal } from './delete-article-modal.component';

interface Props {
    admin: AdminState;
    actions: Actions;
}

interface Actions {
    requestDeleteArticle(article: Article);
    hideDeleteArticleModal();
}

export const DeleteArticleContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <DeleteArticleModal
            admin={props.admin}
            requestDeleteArticle={props.actions.requestDeleteArticle}
            hideDeleteArticleModal={props.actions.hideDeleteArticleModal} />
    );
};

function mapStateToProps(state, ownProps) {
    return {
        admin: state.admin
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...adminActions }, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(DeleteArticleContainer);
