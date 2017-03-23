import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconLogin from 'material-ui/svg-icons/action/face';
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/styles/colors';
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
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this._closeLoginDialog}/>,
      <FlatButton
        label="Login"
        onTouchTap={this._requestLogin}/>
    ];

    return (
      <div>
        <IconButton tooltip="Admin Login"
                    tooltipPosition="bottom-left"
                    touch={true}
                    onClick={this._openLoginDialog}>
          <IconLogin color={fullWhite}/>
        </IconButton>
        <Dialog
          title="Admin Login"
          open={this.props.admin.showLoginDialog}
          actions={actions}>
          <TextField
            hintText="Username"
            fullWidth={true}
            onChange={this._keyUsername}/>
          <TextField
            hintText="Password"
            fullWidth={true}
            type="password"
            onChange={this._keyPassword}/>
        </Dialog>
      </div>
    );
  }
}
