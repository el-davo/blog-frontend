import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import IconLogin from 'material-ui-icons/Face';
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/colors';
import * as React from 'react';
import {AdminState} from '../../../../admin/admin.state';

interface Props {
    admin: AdminState;
    openLoginDialog();
    closeLoginDialog();
    requestLogin(username: string, password: string);
    keyUsername(character: string);
    keyPassword(character: string);
}

export class LoginComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._openLoginDialog = this._openLoginDialog.bind(this);
        this._closeLoginDialog = this._closeLoginDialog.bind(this);
        this._requestLogin = this._requestLogin.bind(this);
        this._keyUsername = this._keyUsername.bind(this);
        this._keyPassword = this._keyPassword.bind(this);
    }

    _openLoginDialog() {
        this.props.openLoginDialog();
    }

    _closeLoginDialog() {
        this.props.closeLoginDialog();
    }

    _requestLogin() {
        this.props.requestLogin(this.props.admin.username, this.props.admin.password);
    }

    _keyUsername({target: {value}}) {
        this.props.keyUsername(value);
    }

    _keyPassword({target: {value}}) {
        this.props.keyPassword(value);
    }

    render() {
        return (
            <div>
                <IconButton onClick={this._openLoginDialog}>
                    <IconLogin color={fullWhite}/>
                </IconButton>
                <Dialog
                    open={this.props.admin.showLoginDialog}>
                    <DialogTitle>Admin Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Username"
                            fullWidth={true}
                            onChange={this._keyUsername}/>
                        <TextField
                            label="Password"
                            fullWidth={true}
                            type="password"
                            onChange={this._keyPassword}/>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this._closeLoginDialog}>Cancel</Button>,
                        <Button
                            onClick={this._requestLogin}>Login</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
