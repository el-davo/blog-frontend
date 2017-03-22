import { NAVIGATE_TO_ROUTE } from './admin-options.action-types';
import { navigateToRoute } from './admin-options.actions';

describe('Admin Options Actions', () => {

    describe('navigateToRoute()', () => {

        it('should navigate to the create article page', () => {
            const route = '/create';
            navigateToRoute(route).should.eql({type: NAVIGATE_TO_ROUTE, route});
        });
    });
});
