import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { Article } from '../../landing/landing.state';
import { newKeyArticleImg } from '../article-editor.actions';
import * as actions from '../article-editor.actions';
import { ArticleEditorState } from '../article-editor.state';
import { CreateArticleComponent } from './create-article.component';

interface Props {
    routes: any;
    articleEditor: ArticleEditorState;
    actions: Actions;
}

interface Actions {
    addArticle(article: Article);
    newKeyArticleName(character: string);
    newKeyArticleSummary(character: string);
    newKeyArticleContent(character: string);
    newKeyArticleImg(character: string);
    requestPreview(markdown: string);
    newToggleArticlePublic();
}

export const CreateArticleContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <BreadcrumbComponent routes={props.routes} />

            <CreateArticleComponent
                articleEditor={props.articleEditor}
                addArticle={props.actions.addArticle}
                newKeyArticleName={props.actions.newKeyArticleName}
                newKeyArticleSummary={props.actions.newKeyArticleSummary}
                newKeyArticleContent={props.actions.newKeyArticleContent}
                newKeyArticleImg={props.actions.newKeyArticleImg}
                requestPreview={props.actions.requestPreview}
                newToggleArticlePublic={props.actions.newToggleArticlePublic} />
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    return {
        routes: ownProps.routes,
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
)(CreateArticleContainer);
