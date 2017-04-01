import * as React from 'react';
import {spy} from 'sinon';
import {shallow} from 'enzyme';
import Dialog from 'material-ui/Dialog';
import {Link} from 'react-router';
import {DeleteArticleModal} from './delete-article-modal.component';
import {AdminState} from '../admin/admin.state';

describe('<DeleteArticleModal />', () => {

  let wrapper;
  let hideDeleteArticleModal;
  let requestDeleteArticle;

  beforeEach(() => {
    const admin = {
      isLoggingIn: false,
      isLoggingOut: false,
      isLoggedIn: false,
      showLoginDialog: false,
      showLogoutDialog: false,
      showDeleteArticleDialog: true,
      isDeleteingArticle: false,
      deleteArticle: {id: 'abc123', name: 'testName'}
    } as AdminState;

    hideDeleteArticleModal = spy();
    requestDeleteArticle = spy();

    wrapper = shallow(<DeleteArticleModal
      admin={admin}
      hideDeleteArticleModal={hideDeleteArticleModal}
      requestDeleteArticle={requestDeleteArticle}/>);
  });

  describe('layout', () => {

    it('should contain a modal', () => {
      wrapper.find(Dialog).should.have.length(1);
    });

    it('should have the correct modal title', () => {
      wrapper.find({title: 'Delete Article'}).should.have.length(1);
    });

    it('should have the correct message on the modal', () => {
      wrapper.find(Dialog).contains('Are you sure you want to delete - ').should.be.true();
    });

    it('should show the delete article modal when showDeleteArticleDialog is true', () => {
      wrapper.find({open: true}).should.have.length(1);
    });

    it('should hide the delete article modal when showDeleteArticleDialog is false', () => {
      wrapper = shallow(<DeleteArticleModal
        admin={{ showDeleteArticleDialog: false, deleteArticle: { name: 'testName' } } as AdminState}
        hideDeleteArticleModal={hideDeleteArticleModal}
        requestDeleteArticle={requestDeleteArticle}/>);

      wrapper.find({open: false}).should.have.length(1);
    });

  });
});
