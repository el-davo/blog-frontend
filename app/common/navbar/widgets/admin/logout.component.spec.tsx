import { openLoginDialog, requestLogin } from '../../../../admin/admin.actions';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { spy } from 'sinon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import LogoutIcon from 'material-ui/svg-icons/action/account-box';
import { LogoutComponent } from './logout.component';
import { AdminState } from '../../../../admin/admin.state';

describe('<LogoutComponent />', () => {

    let wrapper;
    let openLogoutDialog;
    let closeLogoutDialog;
    let requestLogout;

    beforeEach(() => {
        const admin = { isLoggedIn: true, showLogoutDialog: true } as AdminState;
        openLogoutDialog = spy();
        closeLogoutDialog = spy();
        requestLogout = spy();

        wrapper = shallow(<LogoutComponent
            admin={admin}
            openLogoutDialog={openLogoutDialog}
            closeLogoutDialog={closeLogoutDialog}
            requestLogout={requestLogout} />)
    });

    describe('layout', () => {

        it('should have a logout IconButton', () => {
            wrapper.find(IconButton).should.have.length(1);
        });

        it('should have the correct icon on the logout button', () => {
            wrapper.find(IconButton).find(LogoutIcon).should.have.length(1);
        });

        it('should have a logout Dialog', () => {
            wrapper.find(Dialog).should.have.length(1);
        });

        it('should have the correct title on the dialog', () => {
            wrapper.find({ title: 'Logout' }).should.have.length(1);
        });

        it('should show the logout dialog when showLogoutDialog is true', () => {
            wrapper.find({ open: true }).should.have.length(1);
            wrapper.find({ open: false }).should.have.length(0);
        });

        it('should hide the logout dialog when showLogoutDialog is false', () => {
            wrapper = shallow(<LogoutComponent
                admin={{ isLoggedIn: true, showLogoutDialog: false } as AdminState}
                openLogoutDialog={openLogoutDialog}
                closeLogoutDialog={closeLogoutDialog}
                requestLogout={requestLogout} />);

            wrapper.find({ open: false }).should.have.length(1);
            wrapper.find({ open: true }).should.have.length(0);
        });

        it('should have the correct text message on the dialog', () => {
            wrapper.find(Dialog).contains('Are you sure you want to logout?').should.be.true();
        });
    });

    describe('actions', () => {

        it('should open the logout dialog when the logout button in the navbar is clicked', () => {
            wrapper.find(IconButton).simulate('click');

            openLogoutDialog.calledOnce.should.be.true();
        });
    });
});