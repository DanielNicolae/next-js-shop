import { useRouter } from 'next/router';
import React from 'react';
import NextLink from 'next/link';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Image from 'next/image';
import { List, ListItem, Link, Grid, Card, Typography, Button } from '@mui/material';

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(a => a.slug === slug);
  if (!product) {
    return <div>Product not found!</div>
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div>
        <NextLink href='/' passHref>
          <Link>Back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image src={product.image} alt={product.name} width={640} height={640} layout='responsive'></Image>
        </Grid>

        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Topography component='h1'>Name: {product.name}</Topography>
            </ListItem>
            <ListItem>
              <Topography>Category: {product.category}</Topography>
            </ListItem>
            <ListItem>
              <Topography>Brand: {product.brand}</Topography>
            </ListItem>
            <ListItem>
              <Topography>Price: {product.price}</Topography>
            </ListItem>
            <ListItem>
              <Topography>In stock: {product.countInStock}</Topography>
            </ListItem>
            <ListItem>
              <Topography>Number of reviews: {product.numReviews}</Topography>
            </ListItem>
            <ListItem>
              <Topography>Description: {product.description}</Topography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} sx={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.countInStock > 0 ? 'In stock' : 'Unavailable'}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant='contained' color='primary'>
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout >
  )
}
