import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import store from '@/redux/store';
import { App } from '@/containers';
import { GlobalStyle } from '@/components';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/helpers';
import { Home } from '@/containers';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App>
                <Helmet>
                    <meta name="theme-color" content="#FF0000" />
                </Helmet>
                <GlobalStyle />
                <Home/>
            </App>
        </ThemeProvider>
    </Provider>,
    document.getElementById('main'),
);

if (module.hot) module.hot.accept();
