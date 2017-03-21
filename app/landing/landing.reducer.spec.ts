import { FETCH_NEWEST_ARTICLES, UPDATE_NEWEST_ARTICLES, FETCH_NEWEST_ARTICLES_FAILED } from './landing.action-types';
import { landingReducer } from './landing.reducer';
import { landing, Article, LandingState } from './landing.state';

describe('Article Reducer', () => {

    describe('FETCH_NEWEST_ARTICLES', () => {

        it('should update apps list', () => {
            const action = { type: FETCH_NEWEST_ARTICLES };
            const state = { ...landing, isFetchingNewestArticles: false };

            landingReducer(state, action).should.eql({ ...state, isFetchingNewestArticles: true });
        });
    });

    describe('UPDATE_NEWEST_ARTICLES', () => {

        it('should update apps list', () => {
            const action = {
                type: UPDATE_NEWEST_ARTICLES, articles: [
                    { id: '1', name: 'test', summary: 'summary', content: 'test' } as Article
                ]
            };
            const state = { ...landing, articles: [] };

            landingReducer(state, action).should.eql({ ...landing, isFetchingNewestArticles: false, articles: action.articles });
        });
    });

    describe('FETCH_NEWEST_ARTICLES_FAILED', () => {

        it('should update apps list', () => {
            const action = { type: FETCH_NEWEST_ARTICLES_FAILED };
            const state = { ...landing, isFetchingNewestArticles: true };

            landingReducer(state, action).should.eql({ ...landing, isFetchingNewestArticles: false });
        });
    });
});