import {shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {Card, CardText, CardActions} from 'material-ui/Card';
import Button from 'material-ui/Button';
import {CreateArticleComponent} from './create-article.component';
import {ArticleNameInputComponent} from './form/article-name-input.component';
import {ArticleSummaryInputComponent} from './form/article-summary.component';
import {ArticleContentInputComponent} from './form/article-content-input.component';
import {ArticleImgInputComponent} from './form/article-img-input.component';
import {ArticleEditorState} from '../article-editor.state';
import {MarkdownPreviewComponent} from '../preview/markdown-preview.component';
import {ArticlePublicToggleComponent} from './form/article-public-toggle.component';

describe('<CreateArticleComponent />', () => {

  let wrapper;
  let articleEditor;
  let addArticle;
  let newKeyArticleName;
  let newKeyArticleSummary;
  let newKeyArticleContent;
  let newKeyArticleImg;
  let requestPreview;
  let newToggleArticlePublic;

  beforeEach(() => {
    articleEditor = {
      newArticle: {
        name: 'test name',
        summary: 'test summary',
        content: 'test content'
      }
    } as ArticleEditorState;

    addArticle = spy();
    newKeyArticleName = spy();
    newKeyArticleSummary = spy();
    newKeyArticleContent = spy();
    newKeyArticleImg = spy();
    requestPreview = spy();
    newToggleArticlePublic = spy();

    wrapper = shallow(<CreateArticleComponent
      addArticle={addArticle}
      articleEditor={articleEditor}
      newKeyArticleName={newKeyArticleName}
      newKeyArticleSummary={newKeyArticleSummary}
      newKeyArticleContent={newKeyArticleContent}
      newKeyArticleImg={newKeyArticleImg}
      requestPreview={requestPreview}
      newToggleArticlePublic={newToggleArticlePublic}/>);
  });

  describe('layout', () => {

    it('should contain a Card', () => {
      wrapper.find(Card).should.have.length(1);
    });

    it('should contain CardText', () => {
      wrapper.find(CardText).should.have.length(1);
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

    it('should have CardActions', () => {
      wrapper.find(CardActions).should.have.length(1);
    });

    it('should have a save button and a preview button', () => {
      wrapper.find(CardActions).find(Button).should.have.length(2);
    });

    it('should say "Save" on the save button', () => {
      wrapper.find(CardActions).find({label: 'Save'}).should.have.length(1);
    });

    it('should say "Preview" on the preview button', () => {
      wrapper.find(CardActions).find({label: 'Preview'}).should.have.length(1);
    });

    it('should contain a public toggle ArticlePublicToggleComponent', () => {
      wrapper.find(ArticlePublicToggleComponent).should.have.length(1);
    });

    it('should contain MarkdownPreviewComponent', () => {
      wrapper.find(MarkdownPreviewComponent).should.have.length(1);
    });

  });

  describe('actions', () => {

    let wrapperSaveInProgress;

    beforeEach(() => {
      wrapperSaveInProgress = shallow(<CreateArticleComponent
        addArticle={addArticle}
        articleEditor={{
                    newArticle: {
                        name: 'test name',
                        summary: 'test summary',
                        content: 'test content'
                    },
                    isCreatingNewArticle: true
                } as ArticleEditorState}
        newKeyArticleName={newKeyArticleName}
        newKeyArticleSummary={newKeyArticleSummary}
        newKeyArticleContent={newKeyArticleContent}
        newKeyArticleImg={newKeyArticleImg}
        requestPreview={requestPreview}
        newToggleArticlePublic={newToggleArticlePublic}/>);
    });

    it('should save the article when the "Save" button is clicked', () => {
      wrapper.find(CardActions).find({label: 'Save'}).simulate('click');
      addArticle.calledOnce.should.be.true();
      addArticle.calledWith(articleEditor.newArticle).should.be.true();
    });

    it('should request a preview when the "Preview" button is clicked', () => {
      wrapper.find(CardActions).find({label: 'Preview'}).simulate('click');
      requestPreview.calledOnce.should.be.true();
      requestPreview.calledWith(articleEditor.newArticle.content).should.be.true();
    });

    it('should enable the save button when not saving', () => {
      wrapper.find({label: 'Save'}).props().disabled.should.be.false();
    });

    it('should enable the preview button when not saving', () => {
      wrapper.find({label: 'Preview'}).props().disabled.should.be.false();
    });

    it('should disable the save button when saving is in action', () => {
      wrapperSaveInProgress.find({label: 'Save'}).props().disabled.should.be.true();
    });

    it('should disable the preview button when saving is in action', () => {
      wrapperSaveInProgress.find({label: 'Preview'}).props().disabled.should.be.true();
    });
  });
});
