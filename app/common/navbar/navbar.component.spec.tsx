import { mount, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { spy } from 'sinon';
import { NavbarComponent } from './navbar.component';
import { WidgetSearch } from './widgets/search/widget-search.component';

describe('<NavbarComponent />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<MuiThemeProvider><NavbarComponent /></MuiThemeProvider>);
    });

    it('should contain an WidgetSearch component', () => {
        wrapper.find(WidgetSearch).should.have.length(1);
    });

});
