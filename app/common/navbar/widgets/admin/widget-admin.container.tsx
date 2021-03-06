import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActions from '../../../../admin/admin.actions';
import {AdminState} from '../../../../admin/admin.state';
import * as adminOptionsActions from './admin-options.actions';
import {WidgetAdminComponent} from './widget-admin.component';

interface Props {
  admin: AdminState;
  actions: Actions;
}

interface Actions {
  openLoginDialog();
  closeLoginDialog();
  openLogoutDialog();
  closeLogoutDialog();
  requestLogin(username: string, password: string);
  requestLogout();
  keyUsername(character: string);
  keyPassword(character: string);
  navigateToRoute(route: string);
}

export const WidgetAdminContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <WidgetAdminComponent
      admin={props.admin}
      openLoginDialog={props.actions.openLoginDialog}
      closeLoginDialog={props.actions.closeLoginDialog}
      openLogoutDialog={props.actions.openLogoutDialog}
      closeLogoutDialog={props.actions.closeLogoutDialog}
      requestLogin={props.actions.requestLogin}
      requestLogout={props.actions.requestLogout}
      keyUsername={props.actions.keyUsername}
      keyPassword={props.actions.keyPassword}
      navigateToRoute={props.actions.navigateToRoute}/>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    admin: state.admin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...adminActions, ...adminOptionsActions}, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(WidgetAdminContainer);
