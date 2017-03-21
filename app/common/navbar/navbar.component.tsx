import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import * as React from 'react';
import WidgetAdminContainer from './widgets/admin/widget-admin.container';
import { WidgetSearch } from './widgets/search/widget-search.component';

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
