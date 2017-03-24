import { mount, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Loader from 'halogen/ScaleLoader';
import * as React from 'react';
import { spy } from 'sinon';
import { LoadingComponent } from './loading.component';

describe('<LoadingComponent />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<MuiThemeProvider><LoadingComponent /></MuiThemeProvider>);
    });

    it('should display a loading animcation', () => {
        wrapper.find(Loader).should.have.length(1);
    });

});
