import * as React from 'react';
import {spy} from 'sinon';
import Toggle from 'material-ui/Toggle';
import {shallow} from 'enzyme';
import {ArticlePublicToggleComponent} from './article-public-toggle.component';
import {ArticleEditorState} from '../../article-editor.state';

describe('<ArticlePublicToggleComponent />', () => {

  let publicOnWrapper;
  let publicOffWrapper;
  let articleEditorOn;
  let articleEditorOff;
  let editToggleArticlePublic;

  beforeEach(() => {
    articleEditorOn = {
      editingArticle: {
        public: true
      }
    } as ArticleEditorState;

    articleEditorOff = {
      editingArticle: {
        public: false
      }
    } as ArticleEditorState;

    editToggleArticlePublic = spy();

    publicOnWrapper = shallow(<ArticlePublicToggleComponent
      articleEditor={articleEditorOn}
      editToggleArticlePublic={editToggleArticlePublic}/>);

    publicOffWrapper = shallow(<ArticlePublicToggleComponent
      articleEditor={articleEditorOff}
      editToggleArticlePublic={editToggleArticlePublic}/>);
  });

  describe('layout', () => {

    it('should contain a Toggle', () => {
      publicOnWrapper.find(Toggle).should.have.length(1);
    });

    it('should have the correct label for the Toggle', () => {
      publicOnWrapper.find({label: 'Public'}).should.have.length(1);
    });

    it('should have a default state of on when public', () => {
      publicOnWrapper.find({defaultToggled: true}).should.have.length(1);
    });

    it('should have a default state of off when not public', () => {
      publicOffWrapper.find({defaultToggled: false}).should.have.length(1);
    });
  });

  describe('actions', () => {

    it('should toggle the public state when clicked', () => {
      publicOnWrapper.find(Toggle).simulate('toggle');

      editToggleArticlePublic.calledOnce.should.be.true();
    });
  });
});
