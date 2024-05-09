import {experimental_extendTheme as extendTheme} from '@mui/material';

const theme = extendTheme({
    components: {
        //? Global
        MuiCssBaseline: {
            styleOverrides: theme => ({
                '*': {
                    boxSizing: 'border-box',
                },
                '::-webkit-scrollbar': {
                    width: '0.4em',
                },
                '::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 6px rgba(0,0,0,.1)',
                    margin: '12px 0 12px 0',
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.grey['600'],
                },
                body: {
                    height: '100vh',
                },
            }),
        },
        //? Grid
        MuiGrid: {
            styleOverrides: {
                root: {
                    display: 'flex',
                },
            },
        },
    },

});

export default theme;
