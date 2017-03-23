import * as React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { EditArticleContainer } from './edit-article.container';
import { EditArticleComponent } from './edit-article.component';
import { ArticleEditorState } from '../article-editor.state';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';

describe('<EditArticleContainer />', () => {

    let wrapper;
    let actions;

    beforeEach(() => {
        actions = {
            editArticle: spy(),
            fetchEditArticle: spy(),
            editKeyArticleName: spy(),
            editKeyArticleSummary: spy(),
            editKeyArticleContent: spy()
        };

        const articleEditor = {

        } as ArticleEditorState;
        const routes = {};

        wrapper = shallow(<EditArticleContainer
            routes={routes}
            articleId="abc123"
            articleEditor={articleEditor}
            actions={actions} />);
    });

    describe('layout', () => {

        it('should contain BreadcrumbComponent', () => {
            wrapper.find(BreadcrumbComponent).should.have.length(1);
        });

        it('should cotain EditArticleComponent', () => {
            wrapper.find(EditArticleComponent).should.have.length(1);
        });
    });
});
