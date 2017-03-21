import { requestDeleteArticle } from '../../admin/admin.actions';
import * as React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { ArticleCardContainer } from './article-card.container';
import { ArticleCardComponent } from './article-card.component';
import { Article } from '../../landing/landing.state';
import { AdminState } from '../../admin/admin.state';

describe('<ArticleCardContainer />', () => {

    let wrapper;

    beforeEach(() => {
        const article = {} as Article;
        const admin = {} as AdminState;
        const actions = {
            showDeleteArticleModal: spy()
        };

        wrapper = shallow(<ArticleCardContainer article={article} admin={admin} actions={actions} />);
    });

    describe('layout', () => {

        it('should contain ArticleCardComponent', () => {
            wrapper.find(ArticleCardComponent).should.have.length(1);
        });
    });
});
