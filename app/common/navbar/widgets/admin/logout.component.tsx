import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { fullWhite } from 'material-ui/styles/colors';
import LogoutIcon from 'material-ui/svg-icons/action/account-box';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { closeLogoutDialog, openLoginDialog, requestLogout } from '../../../../admin/admin.actions';
import { admin, AdminState } from '../../../../admin/admin.state';

interface Props {
    admin: AdminState;
    openLogoutDialog();
    closeLogoutDialog();
    requestLogout();
}

export class LogoutComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._openLogoutDialog = this._openLogoutDialog.bind(this);
        this._closeLogoutDialog = this._closeLogoutDialog.bind(this);
        this._logout = this._logout.bind(this);
    }

    _openLogoutDialog() {
        this.props.openLogoutDialog();
    }

    _closeLogoutDialog() {
        this.props.closeLogoutDialog();
    }

    _logout() {
        this.props.requestLogout();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                onTouchTap={this._closeLogoutDialog} />,
            <FlatButton
                label="Logout"
                onTouchTap={this._logout} />
        ];

        return (
            <div>
                <IconButton onClick={this._openLogoutDialog}>
                    <LogoutIcon />
                </IconButton>

                <Dialog
                    title="Logout"
                    open={this.props.admin.showLogoutDialog}
                    actions={actions}>
                    Are you sure you want to logout?
                </Dialog>
            </div>
        );
    }
}
