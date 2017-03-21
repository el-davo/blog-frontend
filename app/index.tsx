import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import DeleteArticleContainer from './articles/delete-article-modal.container';
import { NavbarComponent } from './common/navbar/navbar.component';
import { routes } from './routes';
import { configureStore } from './store/configureStore';

import '../node_modules/highlight.js/styles/ir-black.css';
import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './app.css';
injectTapEventPlugin();

const store = configureStore.configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <NavbarComponent />
                <Router history={history} routes={routes} />
                <DeleteArticleContainer />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    position="bottom-left" />
            </div>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
