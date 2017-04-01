import {shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import {WidgetAdminComponent} from './widget-admin.component';
import {AdminState} from '../../../../admin/admin.state';
import {LoginComponent} from './login.component';
import {AdminOptionsComponent} from './admin-options.component';

describe('<WidgetAdminComponent />', () => {

  let loggedInWrapper;
  let loggedOutWrapper;
  let openLoginDialog;
  let closeLoginDialog;
  let openLogoutDialog;
  let closeLogoutDialog;
  let requestLogin;
  let requestLogout;
  let keyUsername;
  let keyPassword;
  let navigateToRoute;

  beforeEach(() => {
    openLoginDialog = spy();
    closeLoginDialog = spy();
    openLogoutDialog = spy();
    closeLogoutDialog = spy();
    requestLogin = spy();
    requestLogout = spy();
    keyUsername = spy();
    keyPassword = spy();
    navigateToRoute = spy();

    loggedInWrapper = shallow(<WidgetAdminComponent
      admin={{ isLoggedIn: true } as AdminState}
      openLoginDialog={openLoginDialog}
      closeLoginDialog={closeLoginDialog}
      openLogoutDialog={openLogoutDialog}
      closeLogoutDialog={closeLogoutDialog}
      requestLogin={requestLogin}
      requestLogout={requestLogout}
      keyUsername={keyUsername}
      keyPassword={keyPassword}
      navigateToRoute={navigateToRoute}/>);

    loggedOutWrapper = shallow(<WidgetAdminComponent
      admin={{ isLoggedIn: false } as AdminState}
      openLoginDialog={openLoginDialog}
      closeLoginDialog={closeLoginDialog}
      openLogoutDialog={openLogoutDialog}
      closeLogoutDialog={closeLogoutDialog}
      requestLogin={requestLogin}
      requestLogout={requestLogout}
      keyUsername={keyUsername}
      keyPassword={keyPassword}
      navigateToRoute={navigateToRoute}/>);
  });

  describe('layout', () => {

    it('should contain a LoginComponent when the user is logged out', () => {
      loggedOutWrapper.find(LoginComponent).should.have.length(1);
    });

    it('should not contain LoginComponent when the user is logged in', () => {
      loggedInWrapper.find(LoginComponent).should.have.length(0);
    });

    it('should not contain AdminOptionsComponent when the user is logged out', () => {
      loggedOutWrapper.find(AdminOptionsComponent).should.have.length(0);
    });

    it('should contain a AdminOptionsComponent when the user is logged in', () => {
      loggedInWrapper.find(AdminOptionsComponent).should.have.length(1);
    });

  });
});
