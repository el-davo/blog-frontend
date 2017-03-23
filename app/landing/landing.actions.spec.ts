import { FETCH_NEWEST_ARTICLES, UPDATE_NEWEST_ARTICLES, FETCH_NEWEST_ARTICLES_FAILED } from './landing.action-types';
import { fetchNewestArticles, updateNewestArticles, fetchNewestArticlesFailed } from './landing.actions';
import { Article } from './landing.state';

describe('Landing Actions', () => {

    describe('fetchNewestArticles()', () => {

        it('should get the newest articles', () => {
            fetchNewestArticles().should.eql({ type: FETCH_NEWEST_ARTICLES });
        });
    });

    describe('updateNewestArticles()', () => {

        it('should update the newest articles list', () => {
            const articles = [{}, {}, {}] as Article[];

            updateNewestArticles(articles).should.eql({ type: UPDATE_NEWEST_ARTICLES, articles });
        });
    });

    describe('fetchNewestArticlesFailed()', () => {

        it('should alert the user that fetching newest articles failed', () => {
            fetchNewestArticlesFailed().should.eql({ type: FETCH_NEWEST_ARTICLES_FAILED });
        });
    });
});
