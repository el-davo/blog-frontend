import {shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {ArticleNameInputComponent} from './article-name-input.component';
import TextField from 'material-ui/TextField';
import {ArticleEditorState} from '../../article-editor.state';

describe('<ArticleNameInputComponent />', () => {

  let wrapper;
  let articleEditor;
  let newKeyArticleName;

  beforeEach(() => {
    articleEditor = {
      newArticle: {
        name: 'test name',
        summary: 'test summary',
        content: 'test content'
      }
    } as ArticleEditorState;

    newKeyArticleName = spy();

    wrapper = shallow(<ArticleNameInputComponent articleEditor={articleEditor} newKeyArticleName={newKeyArticleName}/>);
  });

  describe('layout', () => {

    it('should have a text input field', () => {
      wrapper.find(TextField).should.have.length(1);
    });

    it('should have the orrect hint text', () => {
      wrapper.find({hintText: 'Article Name'}).should.have.length(1);
    });

    it('should have the correct value text', () => {
      wrapper.find({value: 'test name'}).should.have.length(1);
    });

    it('should take up the fullWidth available', () => {
      wrapper.find({fullWidth: true}).should.have.length(1);
    });
  });

  describe('actions', () => {

    it('should update text on user input', () => {
      wrapper.find(TextField).simulate('change', {target: {value: 'Changed'}});
      newKeyArticleName.calledOnce.should.be.true();
      newKeyArticleName.calledWith('Changed').should.be.true();
    });
  });

});
