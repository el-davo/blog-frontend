import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {Card, CardText, CardActions} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import {EditArticleComponent} from './edit-article.component';
import {ArticleEditorState} from '../article-editor.state';
import {ArticleNameInputComponent} from './form/article-name-input.component';
import {ArticleSummaryInputComponent} from './form/article-summary.component';
import {ArticleContentInputComponent} from './form/article-content-input.component';
import {ArticleImgInputComponent} from './form/article-img-input.component';
import {ArticlePublicToggleComponent} from './form/article-public-toggle.component';
import {MarkdownPreviewComponent} from '../preview/markdown-preview.component';

describe('<EditArticleComponent />', () => {

  let wrapper;
  let articleEditor;
  let fetchEditArticle;
  let editArticle;
  let editKeyArticleName;
  let editKeyArticleSummary;
  let editKeyArticleImg;
  let editKeyArticleContent;
  let editToggleArticlePublic;
  let editingRequestPreview;

  beforeEach(() => {
    articleEditor = {
      editingArticle: {
        name: 'test name',
        summary: 'test summary',
        content: 'test content'
      }
    } as ArticleEditorState;

    fetchEditArticle = spy();
    editArticle = spy();
    editKeyArticleName = spy();
    editKeyArticleSummary = spy();
    editKeyArticleImg = spy();
    editKeyArticleContent = spy();
    editToggleArticlePublic = spy();
    editingRequestPreview = spy();

    wrapper = shallow(<EditArticleComponent
      articleId="abc123"
      fetchEditArticle={fetchEditArticle}
      editArticle={editArticle}
      articleEditor={articleEditor}
      editKeyArticleName={editKeyArticleName}
      editKeyArticleSummary={editKeyArticleSummary}
      editKeyArticleImg={editKeyArticleImg}
      editKeyArticleContent={editKeyArticleContent}
      editToggleArticlePublic={editToggleArticlePublic}
      editingRequestPreview={editingRequestPreview}/>);
  });

  describe('layout', () => {

    it('should contain a Card', () => {
      wrapper.find(Card).should.have.length(1);
    });

    it('should contain CardText', () => {
      wrapper.find(Card).find(CardText).should.have.length(1);
    });

    it('should contain ArticleNameInputComponent', () => {
      wrapper.find(ArticleNameInputComponent).should.have.length(1);
    });

    it('should contain ArticleSummaryInputComponent', () => {
      wrapper.find(ArticleSummaryInputComponent).should.have.length(1);
    });

    it('should contain ArticleImgInputComponent', () => {
      wrapper.find(ArticleImgInputComponent).should.have.length(1);
    });

    it('should contain ArticleContentInputComponent', () => {
      wrapper.find(ArticleContentInputComponent).should.have.length(1);
    });

    it('should contain CardActions', () => {
      wrapper.find(CardActions).should.have.length(1);
    });

    it('should have an edit button and a preview button', () => {
      wrapper.find(CardActions).find(Button).should.have.length(2);
    });

    it('should contain an edit button with the label "Edit"', () => {
      wrapper.find(CardActions).find({label: 'Edit'}).should.have.length(1);
    });

    it('should contain a preview button with the label "Preview"', () => {
      wrapper.find(CardActions).find({label: 'Preview'}).should.have.length(1);
    });

    it('should contain ArticlePublicToggleComponent', () => {
      wrapper.find(ArticlePublicToggleComponent).should.have.length(1);
    });

    it('should contain MarkdownPreviewComponent', () => {
      wrapper.find(MarkdownPreviewComponent).should.have.length(1);
    });
  });

  describe('action', () => {

    let component;

    beforeEach(() => {
      component = mount(<MuiThemeProvider><EditArticleComponent
        articleId="abc123"
        fetchEditArticle={fetchEditArticle}
        editArticle={editArticle}
        articleEditor={articleEditor}
        editKeyArticleName={editKeyArticleName}
        editKeyArticleSummary={editKeyArticleSummary}
        editKeyArticleImg={editKeyArticleImg}
        editKeyArticleContent={editKeyArticleContent}
        editToggleArticlePublic={editToggleArticlePublic}
        editingRequestPreview={editingRequestPreview}/></MuiThemeProvider>);
    });

    it('should fetch the editing article when the component mounts', () => {
      fetchEditArticle.calledOnce.should.be.true();
      fetchEditArticle.calledWith('abc123').should.be.true();
    });

    it('should save the article when the "Edit" button is clicked', () => {
      wrapper.find(CardActions).find({label: 'Edit'}).simulate('click');

      editArticle.calledOnce.should.be.true();
      editArticle.calledWith(articleEditor.editingArticle).should.be.true();
    });

    it('should fetch a preview of the markdown when the "Preview" button is clicked', () => {
      wrapper.find(CardActions).find({label: 'Preview'}).simulate('click');

      editingRequestPreview.calledOnce.should.be.true();
      editingRequestPreview.calledWith(articleEditor.editingArticle.content).should.be.true();
    });
  });

});
