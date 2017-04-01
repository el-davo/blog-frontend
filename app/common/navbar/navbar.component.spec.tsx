import {mount} from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {NavbarComponent} from './navbar.component';
import WidgetAdminContainer from './widgets/admin/widget-admin.container';
import {AdminState} from '../../admin/admin.state';

describe('<NavbarComponent />', () => {

  let wrapper;

  beforeEach(() => {

    const mockStore = configureMockStore([]);
    const store = mockStore({
      admin: {
        isLoggedIn: true,
        showLoginDialog: false,
        showLogoutDialog: false
      } as AdminState
    });

    wrapper = mount(<Provider store={store}><MuiThemeProvider><NavbarComponent /></MuiThemeProvider></Provider>);
  });

  describe('layout', () => {

    it('should contain Toolbar', () => {
      wrapper.find(Toolbar).should.have.length(1);
    });

    it('should contain 2 ToolbarGroup', () => {
      wrapper.find(Toolbar).find(ToolbarGroup).should.have.length(2);
    });

    it('should contain WidgetAdminContainer', () => {
      wrapper.find(ToolbarGroup).at(1).find(WidgetAdminContainer).should.have.length(1);
    });

  });

});
