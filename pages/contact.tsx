import * as React from 'react';

import { Layout } from 'components/Layout';
import Head from 'next/head';
import { Container, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const queries = [
  {
    value: 'job-report',
    label: 'Report a job',
  },
  {
    value: 'info',
    label: 'Contact us',
  },
  {
    value: 'bug-report',
    label: 'Report a bug',
  },
  {
    value: 'pricing-issue',
    label: 'Need help with pricing',
  },
];

const About: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [value, setValue] = React.useState('Controlled');

  const handleChangeSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [query, setQuery] = React.useState('info');

  const handleChangeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Arrowed Jobs</title>
        </Head>
      </div>
      <Container maxWidth="md">
        <Typography sx={{ p: 2 }} variant="h3">
          FAQs
        </Typography>

        <Box>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
              <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
                dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
              <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in
                elit. Pellentesque convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
                augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
                augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Mock data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
                augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Typography sx={{ p: 2 }} variant="h4">
          Still need help? Contact us
        </Typography>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField id="outlined-textarea" label="First Name" placeholder="First Name" multiline />
            <TextField id="outlined-textarea" label="Last Name" placeholder="Last Name" multiline />
            <TextField id="outlined-textarea" label="Email Address" placeholder="email@example.com" multiline />
          </div>
        </Box>
        <div>
          <TextField
            id="standard-select-query-native"
            select
            label="Query select"
            value={query}
            onChange={handleChangeCurrency}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your query type"
            variant="outlined"
            sx={{ m: 1 }}
            fullWidth
          >
            {queries.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Comments / Feedback"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
          />
        </div>

        <Box textAlign="center" sx={{ m: 1.5 }}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
