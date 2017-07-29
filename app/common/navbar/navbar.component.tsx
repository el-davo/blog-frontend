import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import WidgetAdminContainer from './widgets/admin/widget-admin.container';

export const NavbarComponent = () => (
    <div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography type="title" color="inherit">
                    Title
                </Typography>
                <WidgetAdminContainer />
            </Toolbar>
        </AppBar>
    </div>
);
