import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {spy} from 'sinon';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {PendingArticlesComponent} from './pending-articles.component';
import {PendingArticlesState} from './pending-articles.state';

describe('<PendingArticlesComponent />', () => {

  let wrapper;
  let mounted;
  let pendingArticles;
  let fetchPendingArticles;
  let showDeleteArticleModal;

  beforeEach(() => {
    pendingArticles = {
      pendingArticles: [
        {name: 'testName1', summary: 'testSummary1', imgUrl: 'http://localhost/img1.png'},
        {name: 'testName2', summary: 'testSummary2', imgUrl: 'http://localhost/img2.png'}
      ]
    } as PendingArticlesState;
    fetchPendingArticles = spy();
    showDeleteArticleModal = spy();

    wrapper = shallow(<PendingArticlesComponent
      pendingArticles={pendingArticles}
      fetchPendingArticles={fetchPendingArticles}
      showDeleteArticleModal={showDeleteArticleModal}/>);

    mounted = mount(<MuiThemeProvider><PendingArticlesComponent
      pendingArticles={pendingArticles}
      fetchPendingArticles={fetchPendingArticles}
      showDeleteArticleModal={showDeleteArticleModal}/></MuiThemeProvider>);
  });

  describe('layout', () => {

    it('should contain a Card', () => {
      wrapper.find(Card).should.have.length(1);
    });

    it('should contain a CardText', () => {
      wrapper.find(Card).find(CardText).should.have.length(1);
    });

    it('should contain a list of pending articles', () => {
      wrapper.find(Card).find(CardText).find(List).should.have.length(1);
    });

    it('should contain 2 ListItem components', () => {
      wrapper.find(List).find(ListItem).should.have.length(2);
    });

    it('should have the correct primaryText on each ListItem', () => {
      wrapper.find(List).find({primaryText: 'testName1'}).should.have.length(1);
      wrapper.find(List).find({primaryText: 'testName2'}).should.have.length(1);
    });

    it('should have the correct secondaryText on each ListItem', () => {
      wrapper.find(List).find({secondaryText: 'testSummary1'}).should.have.length(1);
      wrapper.find(List).find({secondaryText: 'testSummary2'}).should.have.length(1);
    });

    it('should contain 2 Avatars', () => {
      mounted.find(List).find(Avatar).should.have.length(2);
    });

    it('should contain the correct image for each Avatar', () => {
      mounted.find(List).find({src: 'http://localhost/img1.png'}).should.have.length(1);
      mounted.find(List).find({src: 'http://localhost/img2.png'}).should.have.length(1);
    });

  });

  describe('actions', () => {

    it('should fetch a list of pending articles when the component mounts', () => {
      fetchPendingArticles.calledOnce.should.be.true();
    });
  });
});
