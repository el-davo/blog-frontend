import { requestPreviewFailed } from '../article-editor.actions';
import { request } from 'https';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { spy } from 'sinon';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { ArticleEditorState } from '../article-editor.state';
import { MarkdownPreviewComponent } from './markdown-preview.component';

describe('<MarkdownPreviewComponent />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MarkdownPreviewComponent name={'name'} summary={'summary'} imgUrl={'imgUrl'} content={'abc123'} />);
    });

    describe('layout', () => {

        it('should contain a Card', () => {
            wrapper.find(Card).should.have.length(1);
        });

        it('should contain CardText', () => {
            wrapper.find(Card).find(CardText).should.have.length(1);
        });

        it('should contain a CardHeader', () => {
            wrapper.find(Card).find(CardHeader).should.have.length(1);
        });

        it('should have the correct CardHeader title', () => {
            wrapper.find(Card).find({ title: 'name' }).should.have.length(1);
        });

        it('should have the correct Avatar in the CardHeader', () => {
            wrapper.find(Card).find({avatar: 'imgUrl'}).should.have.length(1);
        });

        it('should render the markdown preview content', () => {
            wrapper.find(CardText).find({ dangerouslySetInnerHTML: { __html: 'abc123' } }).should.have.length(1);
        });
    });
});
