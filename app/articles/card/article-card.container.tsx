import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestDeleteArticle } from '../../admin/admin.actions';
import * as adminActions from '../../admin/admin.actions';
import { AdminState } from '../../admin/admin.state';
import { Article } from '../../landing/landing.state';
import { ArticleCardComponent } from './article-card.component';

interface Props {
    article: Article;
    admin: AdminState;
    actions: Actions;
}

interface Actions {
    showDeleteArticleModal(article: Article);
}

export const ArticleCardContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <ArticleCardComponent
            article={props.article}
            admin={props.admin}
            showDeleteArticleModal={props.actions.showDeleteArticleModal} />
    );
};

function mapStateToProps(state, ownProps) {
    return {
        article: ownProps.article,
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
)(ArticleCardContainer);
