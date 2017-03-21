import * as React from 'react';
import { admin, AdminState } from '../../../../admin/admin.state';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

interface Props {
    admin: AdminState;
    openLoginDialog();
    closeLoginDialog();
    openLogoutDialog();
    closeLogoutDialog();
    requestLogin(username: string, password: string);
    requestLogout();
    keyUsername(character: string);
    keyPassword(character: string);
}

export class WidgetAdminComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {
                    !this.props.admin.isLoggedIn ? (
                        <LoginComponent
                            admin={this.props.admin}
                            openLoginDialog={this.props.openLoginDialog}
                            closeLoginDialog={this.props.closeLoginDialog}
                            requestLogin={this.props.requestLogin}
                            keyUsername={this.props.keyUsername}
                            keyPassword={this.props.keyPassword} />
                    ) : (
                            <LogoutComponent
                                admin={this.props.admin}
                                openLogoutDialog={this.props.openLogoutDialog}
                                closeLogoutDialog={this.props.closeLogoutDialog}
                                requestLogout={this.props.requestLogout} />
                        )
                }
            </div>
        );
    }
}
