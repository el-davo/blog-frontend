import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { Article } from '../../landing/landing.state';
import * as actions from '../article-editor.actions';
import { ArticleEditorState } from '../article-editor.state';
import { EditArticleComponent } from './edit-article.component';

interface Props {
    routes: any;
    articleId: string;
    articleEditor: ArticleEditorState;
    actions: Actions;
}

interface Actions {
    editArticle(article: Article);
    fetchEditArticle(articleId: string);
    editKeyArticleName(character: string);
    editKeyArticleSummary(character: string);
    editKeyArticleImg(character: string);
    editKeyArticleContent(character: string);
    editToggleArticlePublic();
    editingRequestPreview(markdown: string);
}

export const EditArticleContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <BreadcrumbComponent routes={props.routes} />

            <EditArticleComponent
                articleEditor={props.articleEditor}
                articleId={props.articleId}
                fetchEditArticle={props.actions.fetchEditArticle}
                editArticle={props.actions.editArticle}
                editKeyArticleName={props.actions.editKeyArticleName}
                editKeyArticleSummary={props.actions.editKeyArticleSummary}
                editKeyArticleImg={props.actions.editKeyArticleImg}
                editKeyArticleContent={props.actions.editKeyArticleContent}
                editToggleArticlePublic={props.actions.editToggleArticlePublic}
                editingRequestPreview={props.actions.editingRequestPreview} />
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    return {
        routes: ownProps.routes,
        articleId: ownProps.params.articleId,
        articleEditor: state.articleEditor
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
)(EditArticleContainer);
