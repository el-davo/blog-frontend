import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { fullWhite } from 'material-ui/styles/colors';
import LogoutIcon from 'material-ui/svg-icons/action/account-box';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import { Link } from 'react-router';
import { closeLogoutDialog, openLoginDialog, requestLogout } from '../../../../admin/admin.actions';
import { admin, AdminState } from '../../../../admin/admin.state';
import { navigateToRoute } from './admin-options.actions';

interface Props {
    admin: AdminState;
    openLogoutDialog();
    closeLogoutDialog();
    requestLogout();
    navigateToRoute(route: string);
}

export class AdminOptionsComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._openLogoutDialog = this._openLogoutDialog.bind(this);
        this._closeLogoutDialog = this._closeLogoutDialog.bind(this);
        this._logout = this._logout.bind(this);
        this._navigateToCreateArticle = this._navigateToCreateArticle.bind(this);
        this._navigateToPendingArticles = this._navigateToPendingArticles.bind(this);
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

    _navigateToCreateArticle() {
        this.props.navigateToRoute('/create');
    }

    _navigateToPendingArticles() {
        this.props.navigateToRoute('/pending');
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
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                    <MenuItem primaryText="Create Article" onClick={this._navigateToCreateArticle} />
                    <MenuItem primaryText="View Pending Articles" onClick={this._navigateToPendingArticles} />
                    <MenuItem primaryText="Logout" onClick={this._openLogoutDialog} />
                </IconMenu>

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
