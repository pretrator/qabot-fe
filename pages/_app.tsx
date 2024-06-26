import withRedux from 'next-redux-wrapper';
import React from 'react';
import store from '@Src/store';
import { Router, withRouter } from 'next/router';
import App, { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';

const FileGPT = ({ Component, pageProps }: AppProps) => {
    return <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
};

FileGPT.getInitialProps = async () => {
    return { pageProps: {} };
}

const makeStore = () => store;

export default withRedux(makeStore)(withRouter(FileGPT));;
