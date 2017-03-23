import { FETCH_VIEW_ARTICLE, UPDATE_VIEW_ARTICLE, FETCH_VIEW_ARTICLE_FAILED } from './article-viewer.action-types';
import { fetchViewArticle, updateViewArticle, fetchViewArticleFailed } from './article-viewer.actions';
import { Article } from '../landing/landing.state';

describe('Article Viewer Actions', () => {

    describe('fetchViewArticle()', () => {

        it('should fetch an article', () => {
            const articleId = 'abc123';
            fetchViewArticle(articleId).should.eql({ type: FETCH_VIEW_ARTICLE, articleId });
        });
    });

    describe('updateViewArticle()', () => {

        it('should update an article', () => {
            const article = { name: 'name', summary: 'summary', content: 'content' } as Article;
            updateViewArticle(article).should.eql({ type: UPDATE_VIEW_ARTICLE, article });
        });
    });

    describe('fetchViewArticleFailed()', () => {

        it('should notify the user that fetching an article failed', () => {
            fetchViewArticleFailed().should.eql({ type: FETCH_VIEW_ARTICLE_FAILED });
        });
    });
});
