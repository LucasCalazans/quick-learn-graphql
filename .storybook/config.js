import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { style } from '@/components/styled/GlobalStyle';
import store from '@/redux/store';
import { Provider } from 'react-redux';

const loadStories = () => {
    const context = require.context('../src', true, /__stories__\/.+\.jsx?$/);
    context.keys().forEach(context);
};

const StoryGlobalStyle = createGlobalStyle`
  ${style}

  html,
  body {
    padding: 10px;
  }
`;

addDecorator(storyFn => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <StoryGlobalStyle />
                {storyFn()}
            </Fragment>
        </Router>
    </Provider>
));

configure(loadStories, module);
