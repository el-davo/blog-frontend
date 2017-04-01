import * as React from 'react';
import {spy} from 'sinon';
import {shallow} from 'enzyme';
import {DeleteArticleModal} from './delete-article-modal.component';
import {DeleteArticleContainer} from './delete-article-modal.container';
import {Article} from '../landing/landing.state';
import {AdminState} from '../admin/admin.state';

describe('<DeleteArticleContainer />', () => {

  let wrapper;

  beforeEach(() => {
    const article = {} as Article;
    const admin = {} as AdminState;
    const actions = {
      requestDeleteArticle: spy(),
      hideDeleteArticleModal: spy()
    };

    wrapper = shallow(<DeleteArticleContainer
      admin={admin}
      actions={actions}/>);
  });

  describe('layout', () => {

    it('should contain DeleteArticleModal', () => {
      wrapper.find(DeleteArticleModal).should.have.length(1);
    });
  });
});
