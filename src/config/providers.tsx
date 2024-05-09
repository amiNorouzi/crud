'use client';
import theme from '@/config/theme';
import {PropsWithChildren} from 'react';
import {CssBaseline} from '@mui/material';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {Provider} from 'react-redux';
import store from '@/store';
import {Experimental_CssVarsProvider as CssVarsProvider} from '@mui/material';
import {AppProgressBar} from 'next-nprogress-bar';

export default function Providers({children}: PropsWithChildren) {
    return (
        <AppRouterCacheProvider>
            <Provider store={store}>
                <CssVarsProvider theme={theme} defaultMode="dark">
                    <CssBaseline/>
                    <AppProgressBar
                        height="4px"
                        color="hsl(256, 78%, 69%)"
                        options={{showSpinner: false}}
                        shallowRouting
                    />
                    {children}
                </CssVarsProvider>
            </Provider>
        </AppRouterCacheProvider>
    );
}
