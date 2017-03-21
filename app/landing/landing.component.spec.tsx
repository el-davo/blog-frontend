import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { spy } from 'sinon';
import { LandingComponent } from './landing.component';
import { AboutCardComponent } from './about/about-card.component';
import { NewestArticlesComponent } from './newest-articles/newest-articles.component';

describe('<LandingComponent />', () => {

    let wrapper;
    let landing;
    let fetchNewestArticles;

    beforeEach(() => {
        landing = { articles: [], isFetchingNewestArticles: false };
        fetchNewestArticles = spy();

        wrapper = shallow(<LandingComponent landing={landing} fetchNewestArticles={fetchNewestArticles} />);
    });

    it('should contain a AboutCardComponent', () => {
        wrapper.find(AboutCardComponent).should.have.length(1);
    });

    it('should display a list of newest articles', () => {
        wrapper.find(NewestArticlesComponent).should.have.length(1);
    });

});

