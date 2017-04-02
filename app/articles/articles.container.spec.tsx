import * as React from 'react';
import {spy} from 'sinon';
import {shallow} from 'enzyme';
import {ArticlesContainer} from './articles.container';
import {ArticlesComponent} from './articles.component';
import {ArticlesState} from './articles.state';
import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';

describe('<EditArticleContainer />', () => {

  let wrapper;
  let actions;

  beforeEach(() => {
    actions = {fetchAllArticles: spy()};

    const articles = {} as ArticlesState;
    const routes = {};

    wrapper = shallow(<ArticlesContainer
      routes={routes}
      articles={articles}
      actions={actions}/>);
  });

  describe('layout', () => {

    it('should contain a BreadcrumbComponent', () => {
      wrapper.find(BreadcrumbComponent).should.have.length(1);
    });

    it('should contain ArticlesComponent', () => {
      wrapper.find(ArticlesComponent).should.have.length(1);
    });
  });
});
