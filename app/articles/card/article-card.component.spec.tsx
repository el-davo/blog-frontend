import * as React from 'react';
import {spy} from 'sinon';
import {shallow} from 'enzyme';
import {Card, CardActions, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import {random} from 'faker';
import {ArticleCardComponent} from './article-card.component';
import {Article} from '../../landing/landing.state';
import {AdminState} from '../../admin/admin.state';

describe('<ArticleCardComponent />', () => {

  let wrapper;
  let adminWrapper;
  let article;
  let showDeleteArticleModal;

  beforeEach(() => {
    article = {
      id: random.uuid(),
      name: 'Article Name',
      summary: 'Article Summary',
      imgUrl: 'http://localhost:8000/bla.png'
    } as Article;
    const admin = {isLoggedIn: true} as AdminState;

    showDeleteArticleModal = spy();

    adminWrapper = shallow(<ArticleCardComponent article={article} admin={admin}
                                                 showDeleteArticleModal={showDeleteArticleModal}/>);
    wrapper = shallow(<ArticleCardComponent
      article={article}
      showDeleteArticleModal={showDeleteArticleModal}
      admin={{ isLoggedIn: false } as AdminState}/>);
  });

  describe('layout', () => {

    it('should display a card', () => {
      wrapper.find(Card).should.have.length(1);
    });

    it('should conain a link to the article viewer page and the edit article page', () => {
      wrapper.find(Link).should.have.length(1);
    });

    it('should have the correct link to the article viewer page', () => {
      wrapper.find({to: `/articles/${article.id}`}).should.have.length(1);
    });

    it('should have CardActions when logged in as admin', () => {
      adminWrapper.find(Card).find(CardActions).should.have.length(1);
    });

    it('should have a button to edit the article and delete the article', () => {
      adminWrapper.find(CardActions).find(FlatButton).should.have.length(2);
    });

    it('should have the correct text on the edit button', () => {
      adminWrapper.find(CardActions).find({label: 'Edit'}).should.have.length(1);
    });

    it('should have a link to the edit article page on the "Edit" button', () => {
      adminWrapper.find(CardActions).find(Link).should.have.length(1);
    });

    it('should have a delete article button', () => {
      adminWrapper.find(CardActions).find({label: 'Delete'}).should.have.length(1);
    });

    it('should have the correct path to the link to the edit article page', () => {
      adminWrapper.find(CardActions).find({to: `/articles/edit/${article.id}`}).should.have.length(1);
    });

    it('should hide card actions when not logged in as admin', () => {
      wrapper.find(CardActions).should.have.length(0);
    });

    it('should contain CardMedia', () => {
      wrapper.find(CardMedia).should.have.length(1);
    });

    it('should contain an image in the CardMedia', () => {
      wrapper.find(CardMedia).find('img').should.have.length(1);
      wrapper.find(CardMedia).find({src: 'http://localhost:8000/bla.png'}).should.have.length(1);
    });

  });

  describe('actions', () => {

    it('should open the delete article modal when the "Delete" button is clicked', () => {
      adminWrapper.find(CardActions).find({label: 'Delete'}).simulate('click');

      showDeleteArticleModal.calledOnce.should.be.true();
      showDeleteArticleModal.calledWith(article).should.be.true();
    });
  });
});
