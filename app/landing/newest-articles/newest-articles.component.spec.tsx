import * as React from 'react';
import { mount, shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import { spy } from 'sinon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureMockStore from 'redux-mock-store';
import { LoadingComponent } from '../../common/loading.component';
import { NewestArticlesComponent } from './newest-articles.component';
import { ArticleCardComponent } from '../../articles/card/article-card.component';

describe('<NewestArticlesComponent />', () => {

    let wrapper;
    let mounted;
    let landing;
    let fetchNewestArticles;

    beforeEach(() => {
        landing = { articles: [{}, {}], isFetchingNewestArticles: false };
        fetchNewestArticles = spy();

        const mockStore = configureMockStore([]);
        const store = mockStore({
            admin: {
                isLoggedIn: true
            }
        });

        wrapper = shallow(<NewestArticlesComponent landing={landing} fetchNewestArticles={fetchNewestArticles} />);
        mounted = mount(<Provider store={store}>
            <MuiThemeProvider>
                <NewestArticlesComponent
                    landing={landing}
                    fetchNewestArticles={fetchNewestArticles} />
            </MuiThemeProvider>
        </Provider>);
    });

    describe('layout', () => {

        it('should not display a loader when fetch is not in progress', () => {
            wrapper.find(LoadingComponent).should.have.length(0);
        });

        it('should display a loader when fetch is in progress', () => {
            const state = { articles: [], isFetchingNewestArticles: true };
            wrapper = shallow(<NewestArticlesComponent landing={state} fetchNewestArticles={fetchNewestArticles} />);
            wrapper.find(LoadingComponent).should.have.length(1);
        });

        it('should display 2 <ArticleCardComponent />', () => {
            mounted.find(ArticleCardComponent).should.have.length(2);
        });
    });

    describe('actions', () => {

        it('should fetch the newest components on load', () => {
            fetchNewestArticles.calledOnce.should.be.true();
        });
    });
});
