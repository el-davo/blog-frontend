import * as React from 'react';
import {spy} from 'sinon';
import {shallow} from 'enzyme';
import {CreateArticleContainer} from './create-article.container';
import {CreateArticleComponent} from './create-article.component';
import {ArticleEditorState} from '../article-editor.state';
import {BreadcrumbComponent} from '../../common/breadcrumb/breadcrumb.component';

describe('<CreateArticleContainer />', () => {

  let wrapper;
  let actions;

  beforeEach(() => {
    actions = {
      newKeyArticleName: spy(),
      newKeyArticleSummary: spy(),
      newKeyArticleContent: spy(),
      newToggleArticlePublic: spy()
    };
    const articleEditor = {} as ArticleEditorState;

    const routes = {};

    wrapper = shallow(<CreateArticleContainer
      routes={routes}
      articleEditor={articleEditor}
      actions={actions}/>);
  });

  describe('layout', () => {

    it('should contain a breadcrumb', () => {
      wrapper.find(BreadcrumbComponent).should.have.length(1);
    });

    it('should cotain CreateArticleComponent', () => {
      wrapper.find(CreateArticleComponent).should.have.length(1);
    });
  });
});
