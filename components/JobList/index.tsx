import { Box, Grid, styled, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';
import JobListItems from './JobListItems';
import JobSelected, { ISelectedJob } from './JobSelected';
import remoteOkRss from 'feeds/remote-ok.json';

const JobList = () => {
  const theme = useTheme();
  const router = useRouter();
  const { jid } = router.query;

  const jobResultsStyles = {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 2rem)',
      mx: 'auto',
      display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(80%)',
      mx: 'auto',
      display: 'block',
      height: 'calc(100vh - 13%)',
    },
  };

  const jobListStyles = {
    marginTop: 1,
    paddingTop: 1,
  };

  const JobSelectedBox = styled(Box)<{ component?: React.ElementType }>(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    position: 'sticky',
    top: 150,
  }));

  const [selectedJob, setSlectedJob] = React.useState<ISelectedJob['selectedJob']>();

  React.useEffect(() => {
    const index = remoteOkRss.findIndex((job) => job.guid === jid);
    setSlectedJob(remoteOkRss[index]);
  }, [jid]);


  return (
    <>
      <Box sx={jobResultsStyles}>
        <Grid sx={jobListStyles} container spacing={2}>
          <Grid item xs={12} md={6}>
            <JobListItems />
          </Grid>
          <Grid item xs={12} md={6}>
            <JobSelectedBox>
              <JobSelected selectedJob={selectedJob} jid={jid} />
            </JobSelectedBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JobList;
