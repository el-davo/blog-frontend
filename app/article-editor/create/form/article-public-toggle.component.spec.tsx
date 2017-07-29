import * as React from 'react';
import {spy} from 'sinon';
import {FormControlLabel} from 'material-ui/Form';
import {shallow} from 'enzyme';
import {ArticlePublicToggleComponent} from './article-public-toggle.component';
import {ArticleEditorState} from '../../article-editor.state';

describe('<ArticlePublicToggleComponent />', () => {

  let publicOnWrapper;
  let publicOffWrapper;
  let articleEditorOn;
  let articleEditorOff;
  let newToggleArticlePublic;

  beforeEach(() => {
    articleEditorOn = {
      newArticle: {
        public: true
      }
    } as ArticleEditorState;

    articleEditorOff = {
      newArticle: {
        public: false
      }
    } as ArticleEditorState;

    newToggleArticlePublic = spy();

    publicOnWrapper = shallow(<ArticlePublicToggleComponent
      articleEditor={articleEditorOn}
      newToggleArticlePublic={newToggleArticlePublic}/>);

    publicOffWrapper = shallow(<ArticlePublicToggleComponent
      articleEditor={articleEditorOff}
      newToggleArticlePublic={newToggleArticlePublic}/>);
  });

  describe('layout', () => {

    it('should contain a Toggle', () => {
      publicOnWrapper.find(FormControlLabel).should.have.length(1);
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
      publicOnWrapper.find(FormControlLabel).simulate('toggle');

      newToggleArticlePublic.calledOnce.should.be.true();
    });
  });
});
