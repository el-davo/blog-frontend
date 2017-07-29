import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import DeleteArticleContainer from './articles/delete-article-modal.container';
import {NavbarComponent} from './common/navbar/navbar.component';
import {routes} from './routes';
import {configureStore} from './store/configureStore';

import '../node_modules/highlight.js/styles/ir-black.css';
import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './app.css';

const store = configureStore.configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const theme = createMuiTheme({});
render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <div>
                <NavbarComponent />
                <Router history={history} routes={routes}/>
                <DeleteArticleContainer />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    position="bottom-left"/>
            </div>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
