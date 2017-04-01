import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import * as React from 'react';
import WidgetAdminContainer from './widgets/admin/widget-admin.container';

const style = {
  marginBottom: 20,
  backgroundColor: '#00BCD4'
};

export const NavbarComponent = () => (
  <Toolbar style={style}>
    <ToolbarGroup />
    <ToolbarGroup lastChild={true}>
      <WidgetAdminContainer />
    </ToolbarGroup>
  </Toolbar>
);
