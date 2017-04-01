import * as React from 'react';
import {spy} from 'sinon';
import {shallow} from 'enzyme';
import {PendingArticlesContainer} from './pending-articles.container';
import {PendingArticlesState} from './pending-articles.state';
import {PendingArticlesComponent} from './pending-articles.component';
import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';

describe('<PendingArticlesContainer />', () => {

  let wrapper;

  beforeEach(() => {
    const pendingArticles = {
      pendingArticles: [
        {name: 'testName1', summary: 'testSummary1', imgUrl: 'http://localhost/img1.png'},
        {name: 'testName2', summary: 'testSummary2', imgUrl: 'http://localhost/img2.png'}
      ]
    } as PendingArticlesState;
    const routes = {};
    const actions = {
      fetchPendingArticles: spy(),
      showDeleteArticleModal: spy()
    };

    wrapper = shallow(<PendingArticlesContainer
      routes={routes}
      pendingArticles={pendingArticles}
      actions={actions}/>);
  });

  describe('layout', () => {

    it('should contain PendingArticlesComponent', () => {
      wrapper.find(PendingArticlesComponent).should.have.length(1);
    });

    it('should contain a BreadcrumbComponent', () => {
      wrapper.find(BreadcrumbComponent).should.have.length(1);
    });
  });

});
