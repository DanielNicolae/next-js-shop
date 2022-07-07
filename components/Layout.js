import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, ThemeProvider } from '@mui/material';
import { StyledEngineProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#55aaaf',
    },
    secondary: {
      main: '#edfeec',
    },
  },
});

export default function Layout({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next shop</title>
        </Head>
        <AppBar position="static">
          <Toolbar>
            <Typography>Next shop</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          {children}
        </Container>
        <footer>
          <Typography>
            A shop app made in Next.js
          </Typography>
        </footer>
      </ThemeProvider>
    </StyledEngineProvider >
  )
}
