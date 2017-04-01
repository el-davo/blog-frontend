import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AdminOptionsComponent} from './admin-options.component';
import {AdminState} from '../../../../admin/admin.state';

describe('<LogoutComponent />', () => {

  let wrapper;
  let mounted;
  let openLogoutDialog;
  let closeLogoutDialog;
  let requestLogout;
  let navigateToRoute;

  beforeEach(() => {
    const admin = {isLoggedIn: true, showLogoutDialog: true} as AdminState;
    openLogoutDialog = spy();
    closeLogoutDialog = spy();
    requestLogout = spy();
    navigateToRoute = spy();

    wrapper = shallow(<AdminOptionsComponent
      admin={admin}
      openLogoutDialog={openLogoutDialog}
      closeLogoutDialog={closeLogoutDialog}
      requestLogout={requestLogout}
      navigateToRoute={navigateToRoute}/>);

    mounted = mount(<MuiThemeProvider><AdminOptionsComponent
      admin={admin}
      openLogoutDialog={openLogoutDialog}
      closeLogoutDialog={closeLogoutDialog}
      requestLogout={requestLogout}
      navigateToRoute={navigateToRoute}/></MuiThemeProvider>);
  });

  describe('layout', () => {

    it('should contain an IconMenu', () => {
      wrapper.find(IconMenu).should.have.length(1);
    });

    it('should contain the correct icon for the dropdown menu', () => {
      mounted.find(IconMenu).find(IconButton).find(MoreVertIcon).should.have.length(1);
    });

    it('should contain a "Create Article" option', () => {
      wrapper.find(IconMenu).find({primaryText: 'Create Article'}).should.have.length(1);
    });

    it('should contain a "View Pending Articles" option', () => {
      wrapper.find(IconMenu).find({primaryText: 'View Pending Articles'}).should.have.length(1);
    });

    it('should contain a "Logout" option', () => {
      wrapper.find(IconMenu).find({primaryText: 'Logout'}).should.have.length(1);
    });

    it('should hide the logout dialog when showLogoutDialog is false', () => {
      wrapper = shallow(<AdminOptionsComponent
        admin={{ isLoggedIn: true, showLogoutDialog: false } as AdminState}
        openLogoutDialog={openLogoutDialog}
        closeLogoutDialog={closeLogoutDialog}
        requestLogout={requestLogout}
        navigateToRoute={navigateToRoute}/>);

      wrapper.find({open: false}).should.have.length(1);
      wrapper.find({open: true}).should.have.length(0);
    });

    it('should have the correct text message on the dialog', () => {
      wrapper.find(Dialog).contains('Are you sure you want to logout?').should.be.true();
    });
  });

  describe('actions', () => {

    it('should open the logout dialog when the logout button in the navbar is clicked', () => {
      wrapper.find(IconMenu).find({primaryText: 'Logout'}).simulate('touchTap');

      openLogoutDialog.calledOnce.should.be.true();
    });

    it('should navigate to the create article page when the "Create Article" option is clicked', () => {
      wrapper.find(IconMenu).find({primaryText: 'Create Article'}).simulate('touchTap');

      navigateToRoute.calledOnce.should.be.true();
      navigateToRoute.calledWith('/create').should.be.true();
    });

    it('should navigate to the pending articles page when the "View Pending Articles" option is clicked', () => {
      wrapper.find(IconMenu).find({primaryText: 'View Pending Articles'}).simulate('touchTap');

      navigateToRoute.calledOnce.should.be.true();
      navigateToRoute.calledWith('/pending').should.be.true();
    });
  });
});
