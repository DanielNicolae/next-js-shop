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
        <AppBar position='static' className='AppBar'>
          <Toolbar className='Grow'>
            <NextLink href='/' passHref>
              <Link >
                <Typography className='Title'>Next shop</Typography>
              </Link>
            </NextLink>
            {/* <div className='Grow'></div> */}
            <div className='Links'>
              <NextLink href='/cart' passHref>
                <Link>
                  <Typography className='CartMenu'>Cart</Typography>
                </Link>
              </NextLink>
              <NextLink href='/login' passHref>
                <Link>
                  <Typography className='CartMenu'>Login</Typography>
                </Link>
              </NextLink>
            </div>
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
