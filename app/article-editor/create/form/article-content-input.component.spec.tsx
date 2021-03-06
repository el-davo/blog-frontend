import {shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import TextField from 'material-ui/TextField';
import {ArticleContentInputComponent} from './article-content-input.component';
import {ArticleEditorState} from '../../article-editor.state';

describe('<ArticleContentInputComponent />', () => {

  let wrapper;
  let articleEditor;
  let newKeyArticleContent;

  beforeEach(() => {
    articleEditor = {
      newArticle: {
        name: 'test name',
        summary: 'test summary',
        content: 'test content'
      }
    } as ArticleEditorState;

    newKeyArticleContent = spy();

    wrapper = shallow(<ArticleContentInputComponent articleEditor={articleEditor}
                                                    newKeyArticleContent={newKeyArticleContent}/>);
  });

  describe('layout', () => {

    it('should contain a TextField', () => {
      wrapper.find(TextField).should.have.length(1);
    });

    it('should have the correct hintText', () => {
      wrapper.find({hintText: 'Markdown Content'}).should.have.length(1);
    });

    it('should display correct text in editor', () => {
      wrapper.find({value: 'test content'}).should.have.length(1);
    });

    it('should be fullWidth', () => {
      wrapper.find({fullWidth: true}).should.have.length(1);
    });

    it('should be multiline enabled', () => {
      wrapper.find({multiLine: true}).should.have.length(1);
    });
  });

  describe('actions', () => {

    it('should update text on user input', () => {
      wrapper.find(TextField).simulate('change', {target: {value: 'Changed'}});

      newKeyArticleContent.calledOnce.should.be.true();
      newKeyArticleContent.calledWith('Changed').should.be.true();
    });
  });
});
