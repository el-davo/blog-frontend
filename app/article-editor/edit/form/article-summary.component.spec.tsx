import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { spy } from 'sinon';
import { ArticleSummaryInputComponent } from './article-summary.component';
import TextField from 'material-ui/TextField';
import { ArticleEditorState } from '../../article-editor.state';

describe('<ArticleSummaryInputComponent />', () => {

    let wrapper;
    let articleEditor;
    let editKeyArticleSummary;

    beforeEach(() => {
        articleEditor = {
            editingArticle: {
                name: 'test name',
                summary: 'test summary',
                content: 'test content'
            }
        } as ArticleEditorState;

        editKeyArticleSummary = spy();

        wrapper = shallow(<ArticleSummaryInputComponent articleEditor={articleEditor} editKeyArticleSummary={editKeyArticleSummary} />);
    });

    describe('layout', () => {

        it('should have a text input field', () => {
            wrapper.find(TextField).should.have.length(1);
        });

        it('should have the orrect hint text', () => {
            wrapper.find({ hintText: 'Article Summary' }).should.have.length(1);
        });

        it('should have the correct value text', () => {
            wrapper.find({ value: 'test summary' }).should.have.length(1);
        });

        it('should take up the fullWidth available', () => {
            wrapper.find({ fullWidth: true }).should.have.length(1);
        });
    });

    describe('actions', () => {

        it('should update text on user input', () => {
            wrapper.find(TextField).simulate('change', { target: { value: 'Changed' } });
            editKeyArticleSummary.calledOnce.should.be.true();
            editKeyArticleSummary.calledWith('Changed').should.be.true();
        });
    });

});