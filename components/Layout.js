import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container, ThemeProvider, Link } from '@mui/material';
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
        <AppBar position='static'>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <Typography>Next shop</Typography>
              </Link>
            </NextLink>
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
