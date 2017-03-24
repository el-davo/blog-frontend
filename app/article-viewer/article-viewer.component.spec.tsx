import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Time from 'react-time';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ArticleViewerComponent} from './article-viewer.component';
import {ArticleViewerState} from './article-viewer.state';
import {LoadingComponent} from '../common/loading.component';

describe('<ArticleViewerComponent />', () => {

  let wrapper;
  let mounted;
  let fetchViewArticle;
  let articleViewer;

  beforeEach(() => {
    fetchViewArticle = spy();
    articleViewer = {
      isFetchingArticle: false, article: {
        name: 'testName',
        summary: 'testSummary',
        content: 'testContent',
        modified: '2017-03-24T13:26:16.000Z',
        parsedContent: 'testContentParsed',
        imgUrl: 'http://localhost:8000/img.png'
      }
    } as ArticleViewerState;

    wrapper = shallow(<ArticleViewerComponent
      articleId={'abc123'}
      articleViewer={articleViewer}
      fetchViewArticle={fetchViewArticle}/>);

    mounted = mount(<MuiThemeProvider><ArticleViewerComponent
      articleId={'abc123'}
      articleViewer={articleViewer}
      fetchViewArticle={fetchViewArticle}/></MuiThemeProvider>);
  });

  describe('layout', () => {

    it('should contain a card', () => {
      wrapper.find(Card).should.have.length(1);
    });

    it('should contain a card header', () => {
      wrapper.find(CardHeader).should.have.length(1);
    });

    it('should have the correct card header title as the name of the article', () => {
      wrapper.find({title: 'testName'}).should.have.length(1);
      wrapper.find({avatar: 'http://localhost:8000/img.png'}).should.have.length(1);
    });

    it('should set the correct date of modified article', () => {
      mounted.find(Time).should.have.length(1);
    });

    it('should contain a CardText component', () => {
      wrapper.find(CardText).should.have.length(1);
    });

    it('should render the markdown content', () => {
      wrapper.find(CardText).find({dangerouslySetInnerHTML: {__html: 'testContentParsed'}}).should.have.length(1);
    });

    it('should not display a loading icon when fetching article has completed', () => {
      wrapper.find(LoadingComponent).should.have.length(0);
    });

    it('should display a loading icon when fetching the article', () => {
      articleViewer.isFetchingArticle = true;
      wrapper = shallow(<ArticleViewerComponent
        articleId={'abc123'}
        articleViewer={articleViewer}
        fetchViewArticle={fetchViewArticle}/>);

      wrapper.find(LoadingComponent).should.have.length(1);
    });
  });

  describe('actions', () => {

    it('should fetch article when the component has mounted', () => {
      fetchViewArticle.calledOnce.should.be.true();
      fetchViewArticle.calledWith('abc123').should.be.true();
    });

  });

});
