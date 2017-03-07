import * as React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import LandingContainer from './landing/landing.container';

export const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={LandingContainer} />
	</Router>
);
