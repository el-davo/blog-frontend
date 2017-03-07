import AppBar from 'material-ui/AppBar';
import * as React from 'react';
import {WidgetSearch} from './widgets/search/widget-search.component';

export const NavbarComponent = () => (
    <AppBar
        title="Title"
        iconElementRight={<WidgetSearch />}
    />
);