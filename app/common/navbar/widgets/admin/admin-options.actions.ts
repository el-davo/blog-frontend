import { NAVIGATE_TO_ROUTE } from './admin-options.action-types';

export function navigateToRoute(route: string) {
    return { type: NAVIGATE_TO_ROUTE, route };
}
