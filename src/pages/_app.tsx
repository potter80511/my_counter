import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'src/Store';

// import '@styles/theme.scss';
// import '@styles/transition_group.scss';

export default class JohnnyApp extends App {
  render() {
    const { Component, pageProps} = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
