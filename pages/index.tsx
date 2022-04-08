import * as React from 'react';
import Head from 'next/head';
import { Layout } from 'components/Layout';
import HomepageHeader from 'components/HomepageHeader';
import HomepageFilter from 'components/HomepageFilter';
import { Box, Divider, Paper, styled, useTheme } from '@mui/material';
import JobList from 'components/JobList';

const Index: React.FC = () => {
  const theme = useTheme();
  
  const HomepageHeaderBox = styled(Paper)({
    background: `linear-gradient(90deg, rgba(254,202,240,1) 0%, rgba(185,231,236,1) 47%, rgba(161,191,235,1) 100%)`,
  });

  const SearchBoxWrapper = {
    [theme.breakpoints.up('sm')]: {
      mx: 2,
    }
  }
  
  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Arrow Jobs</title>
        </Head>
        <div>
          <Box sx={SearchBoxWrapper}>
            <HomepageHeaderBox elevation={1} sx={{ p: 1, shadow: 2, borderRadius: '0 0 0 0' }}>
              <HomepageHeader />
            </HomepageHeaderBox>
            <Divider></Divider>
          </Box>

          <HomepageFilter />
          <JobList />
          <Box sx={{ height: 500 }}></Box>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
