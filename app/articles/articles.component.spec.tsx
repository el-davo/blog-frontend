import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {ArticlesComponent} from './articles.component';
import {ArticlesState} from './articles.state';
import {LoadingComponent} from '../common/loading.component';

describe('<ArticlesComponent />', () => {

  let wrapper;
  let mounted;
  let fetchArticles;

  beforeEach(() => {
    const articles = {
      isFetchingAllArticles: false,
      list: [
        {id: 'abc1', name: 'article1', summary: 'summary1', imgUrl: 'http://test1.png'},
        {id: 'abc2', name: 'article2', summary: 'summary2', imgUrl: 'http://test2.png'}
      ]
    } as ArticlesState;

    fetchArticles = spy();

    wrapper = shallow(<ArticlesComponent articles={articles} fetchAllArticles={fetchArticles}/>);

    mounted = mount(<MuiThemeProvider><ArticlesComponent articles={articles}
                                                         fetchAllArticles={fetchArticles}/></MuiThemeProvider>);
  });

  describe('layout', () => {

    it('should display a Card and CardText', () => {
      wrapper.find(Card).should.have.length(1);
      wrapper.find(Card).find(CardText).should.have.length(1);
    });

    it('should display a list', () => {
      wrapper.find(CardText).find(List).should.have.length(1);
    });

    it('should have 2 ListItems', () => {
      wrapper.find(List).find(ListItem).should.have.length(2);
    });

    it('should display the correct name of article in the list', () => {
      wrapper.find(List).find({primaryText: 'article1'}).should.have.length(1);
      wrapper.find(List).find({primaryText: 'article2'}).should.have.length(1);
    });

    it('should display the correct summary of article in the list', () => {
      wrapper.find(List).find({secondaryText: 'summary1'}).should.have.length(1);
      wrapper.find(List).find({secondaryText: 'summary2'}).should.have.length(1);
    });

    it('should display the Avatar for each ListItem', () => {
      mounted.find(List).find(Avatar).should.have.length(2);
    });

    it('should display the correct image on the Avatar', () => {
      mounted.find(List).find({src: 'http://test1.png'}).should.have.length(1);
      mounted.find(List).find({src: 'http://test2.png'}).should.have.length(1);
    });

    it('should not display a LoadingComponent when not fetching articles', () => {
      wrapper.find(LoadingComponent).should.have.length(0);
    });

    it('should display a LoadingComponent when fetching articles', () => {
      const articles = {isFetchingAllArticles: true, list: []} as ArticlesState;
      wrapper = shallow(<ArticlesComponent articles={articles} fetchAllArticles={fetchArticles}/>);

      wrapper.find(LoadingComponent).should.have.length(1);
    });

    it('should contain the correct links to articles', () => {
      wrapper.find(List).find(Link).should.have.length(2);
      wrapper.find(List).find({to: '/articles/abc1'}).should.have.length(1);
      wrapper.find(List).find({to: '/articles/abc2'}).should.have.length(1);
    });
  });

  describe('actions', () => {

    it('should fetch a list of articles when the component mounts', () => {
      fetchArticles.calledOnce.should.be.true();
    });
  });
});
