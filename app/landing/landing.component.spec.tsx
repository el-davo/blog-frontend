import {shallow, mount} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ViewIcon from 'material-ui/svg-icons/action/list';
import {LandingComponent} from './landing.component';
import {AboutCardComponent} from './about/about-card.component';
import {NewestArticlesComponent} from './newest-articles/newest-articles.component';

describe('<LandingComponent />', () => {

  let wrapper;
  let mounted;
  let landing;
  let fetchNewestArticles;

  beforeEach(() => {
    landing = {articles: [], isFetchingNewestArticles: false};
    fetchNewestArticles = spy();

    wrapper = shallow(<LandingComponent landing={landing} fetchNewestArticles={fetchNewestArticles}/>);
    mounted = mount(<MuiThemeProvider><LandingComponent landing={landing}
                                                        fetchNewestArticles={fetchNewestArticles}/></MuiThemeProvider>);
  });

  describe('layout', () => {

    it('should contain a AboutCardComponent', () => {
      wrapper.find(AboutCardComponent).should.have.length(1);
    });

    it('should display a list of newest articles', () => {
      wrapper.find(NewestArticlesComponent).should.have.length(1);
    });

    it('should display a button with a link to the "All articles" page', () => {
      wrapper.find(RaisedButton).should.have.length(1);
      wrapper.find({label: 'View All Articles'}).should.have.length(1);
      mounted.find(ViewIcon).should.have.length(1);
      wrapper.find({to: '/articles'}).should.have.length(1);
    });
  });
});
