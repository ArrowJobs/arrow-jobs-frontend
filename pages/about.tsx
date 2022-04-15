import * as React from 'react';

import { Layout } from 'components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import LiveFromSpace from 'public/live-from-space.jpg';

const About: React.FC = () => {
  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Arrow Jobs</title>
        </Head>
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '70%', margin: 'auto', mt: 5 }}>
            <Box>
              <Typography variant="h1" sx={{ fontWeight: 'bold', minWidht: '100%', marginRight: 30 }}>
                About&nbsp;Us
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{letterSpacing: '0.07rem'}}>
                ArrowedJobs helps companies present themselves to their prospective employees like it has never been
                done before. We offer a platform for employers that helps prospective hires to experience the company
                culture remotely.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '80%', margin: 'auto', mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={3} lg={3}>
                <Paper>
                  <Box sx={{ width: "100%", height:'100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={LiveFromSpace}// Scale your image down to fit into the container
                    />
                  </Box>

                  <Card sx={{ minWidht: '100%' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Paper>
                  <Box sx={{ width: "100%", height:'100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={LiveFromSpace}// Scale your image down to fit into the container
                    />
                  </Box>

                  <Card sx={{ minWidht: '100%' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Paper>
                  <Box sx={{ width: "100%", height:'100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={LiveFromSpace}// Scale your image down to fit into the container
                    />
                  </Box>

                  <Card sx={{ minWidht: '100%' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={3} lg={3}>
                <Paper>
                  <Box sx={{ width: "100%", height:'100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={LiveFromSpace}// Scale your image down to fit into the container
                    />
                  </Box>

                  <Card sx={{ minWidht: '100%' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default About;
