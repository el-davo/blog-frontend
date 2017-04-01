import {shallow} from 'enzyme';
import * as React from 'react';
import {spy} from 'sinon';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import IconLogin from 'material-ui/svg-icons/action/face';
import TextField from 'material-ui/TextField';
import {LoginComponent} from './login.component';
import {AdminState} from '../../../../admin/admin.state';

describe('<LoginComponent />', () => {

  let wrapper;
  let openLoginDialog;
  let closeLoginDialog;
  let requestLogin;
  let keyUsername;
  let keyPassword;

  beforeEach(() => {
    const admin = {showLoginDialog: false} as AdminState;
    openLoginDialog = spy();
    closeLoginDialog = spy();
    requestLogin = spy();
    keyUsername = spy();
    keyPassword = spy();

    wrapper = shallow(<LoginComponent
      admin={admin}
      openLoginDialog={openLoginDialog}
      closeLoginDialog={closeLoginDialog}
      requestLogin={requestLogin}
      keyUsername={keyUsername}
      keyPassword={keyPassword}/>);
  });

  describe('layout', () => {

    it('should contain an IconButton', () => {
      wrapper.find(IconButton).should.have.length(1);
    });

    it('should allow the IconButton to be touchable for mobile devices', () => {
      wrapper.find({touch: true}).should.have.length(1);
    });

    it('should have an icon on the IconButton', () => {
      wrapper.find(IconButton).find(IconLogin).should.have.length(1);
    });

    it('should have a tooltip on the login button', () => {
      wrapper.find({tooltip: 'Admin Login'}).should.have.length(1);
    });

    it('should contain a Dialog', () => {
      wrapper.find(Dialog).should.have.length(1);
    });

    it('should have the correct dialog header', () => {
      wrapper.find({title: 'Admin Login'}).should.have.length(1);
    });

    it('should not open the login modal when showLoginDialog is false', () => {
      wrapper.find({open: false}).should.have.length(1);
    });

    it('should show the login dialog when showLoginDialog is true', () => {
      const admin = {showLoginDialog: true} as AdminState;
      const component = shallow(<LoginComponent
        admin={admin}
        openLoginDialog={openLoginDialog}
        closeLoginDialog={closeLoginDialog}
        requestLogin={requestLogin}
        keyUsername={keyUsername}
        keyPassword={keyPassword}/>);

      component.find({open: true}).should.have.length(1);
    });

    it('should have a username and password input fields with full width', () => {
      wrapper.find(Dialog).find(TextField).should.have.length(2);
      wrapper.find(Dialog).find({fullWidth: true}).should.have.length(2);
    });

    it('should have the correct hint on the username input field', () => {
      wrapper.find(Dialog).find({hintText: 'Username'}).should.have.length(1);
      wrapper.find({type: 'password'}).should.have.length(1);
    });

    it('should have the correct hint on the password input field', () => {
      wrapper.find(Dialog).find({hintText: 'Password'}).should.have.length(1);
    });

  });

  describe('actions', () => {

    it('should open the login dialog when the button is clicked', () => {
      wrapper.find(IconButton).simulate('click');

      openLoginDialog.calledOnce.should.be.true();
    });

    it('should update the username when a user enters characters', () => {
      wrapper.find(TextField).at(0).simulate('change', {target: {value: 'Changed'}});

      keyUsername.calledOnce.should.be.true();
      keyUsername.calledWith('Changed').should.be.true();
    });

    it('should update the password when a user enters characters', () => {
      wrapper.find(TextField).at(1).simulate('change', {target: {value: 'Changed'}});

      keyPassword.calledOnce.should.be.true();
      keyPassword.calledWith('Changed').should.be.true();
    });
  });
});
