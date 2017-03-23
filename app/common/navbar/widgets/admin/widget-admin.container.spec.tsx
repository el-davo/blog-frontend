import { closeLogoutDialog, openLogoutDialog } from '../../../../admin/admin.actions';
import * as React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { WidgetAdminContainer } from './widget-admin.container';
import { WidgetAdminComponent } from './widget-admin.component';
import { AdminState } from '../../../../admin/admin.state';

describe('<WidgetAdminContainer />', () => {

    let wrapper;

    beforeEach(() => {
        const admin = { isLoggedIn: false } as AdminState;

        const actions = {
            openLoginDialog: spy(),
            closeLoginDialog: spy(),
            openLogoutDialog: spy(),
            closeLogoutDialog: spy(),
            requestLogin: spy(),
            requestLogout: spy(),
            keyUsername: spy(),
            keyPassword: spy(),
            navigateToRoute: spy()
        };

        wrapper = shallow(<WidgetAdminContainer
            admin={admin}
            actions={actions} />);
    });

    describe('layout', () => {

        it('should contain WidgetAdminComponent', () => {
            wrapper.find(WidgetAdminComponent).should.have.length(1);
        });
    });
});
