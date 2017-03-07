import { shallow } from 'enzyme';
import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import { AboutCardComponent } from './about-card.component';

describe('<AboutCardComponent />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AboutCardComponent />);
    });

    it('should contain a Avatar', () => {
        wrapper.find(Avatar).should.have.length(1);
    });

});
