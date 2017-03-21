import * as React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { ArticleViewerContainer } from './article-viewer.container';
import { ArticleViewerComponent } from './article-viewer.component';
import { ArticleViewerState } from './article-viewer.state';
import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';

describe('<ArticleViewerContainer />', () => {

    let wrapper;
    let actions;

    beforeEach(() => {
        actions = {
            fetchViewArticle: spy()
        }
        const articleViewer = {
            isFetchingArticle: false, article: {
                name: 'testName',
                summary: 'testSummary',
                content: 'testContent'
            }
        } as ArticleViewerState;

        const routes = {};

        wrapper = shallow(<ArticleViewerContainer
            routes={routes}
            articleId={'abc123'}
            articleViewer={articleViewer}
            actions={actions} />);
    });

    describe('layout', () => {

        it('should contain BreadcrumbComponent', () => {
            wrapper.find(BreadcrumbComponent).should.have.length(1);
        });

        it('should contain ArticleViewerComponent', () => {
            wrapper.find(ArticleViewerComponent).should.have.length(1);
        });
    });
});
