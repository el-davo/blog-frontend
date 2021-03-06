import {shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {ArticleImgInputComponent} from './article-img-input.component';
import TextField from 'material-ui/TextField';
import {ArticleEditorState} from '../../article-editor.state';

describe('<ArticleNameInputComponent />', () => {

  let wrapper;
  let articleEditor;
  let editKeyArticleImg;

  beforeEach(() => {
    articleEditor = {
      editingArticle: {
        name: 'test name',
        summary: 'test summary',
        content: 'test content',
        imgUrl: 'http://localhost:800/myImage.png'
      }
    } as ArticleEditorState;

    editKeyArticleImg = spy();

    wrapper = shallow(<ArticleImgInputComponent articleEditor={articleEditor} editKeyArticleImg={editKeyArticleImg}/>);
  });

  describe('layout', () => {

    it('should contain a TextField', () => {
      wrapper.find(TextField).should.have.length(1);
    });

    it('should have the correct hint text', () => {
      wrapper.find({hintText: 'Image Url'}).should.have.length(1);
    });

    it('should be full width', () => {
      wrapper.find({fullWidth: true}).should.have.length(1);
    });

    it('should have the correct value', () => {
      wrapper.find({value: 'http://localhost:800/myImage.png'}).should.have.length(1);
    });
  });

  describe('actions', () => {

    it('should update the text when the user types', () => {
      wrapper.find(TextField).simulate('change', {target: {value: 'Changed'}});

      editKeyArticleImg.calledOnce.should.be.true();
      editKeyArticleImg.calledWith('Changed').should.be.true();
    });
  });

});
