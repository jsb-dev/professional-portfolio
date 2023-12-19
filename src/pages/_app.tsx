import React from 'react';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store';
import 'normalize.css';
import '@/styles/globals.css';
import '@/styles/animations.css';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ReduxProvider store={store}>
            <Component {...pageProps} />
        </ReduxProvider>
    );
}

export default MyApp;
