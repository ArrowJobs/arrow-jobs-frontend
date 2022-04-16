import * as React from 'react';

import { Layout } from 'components/Layout';
import Head from 'next/head';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';

const About: React.FC = () => {
  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Arrowed Jobs</title>
        </Head>
      </div>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', mx: 'auto' }}>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Report Bugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles,
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Email us
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ display: 'grid', maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Report Bugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Email us
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
};

export default About;
