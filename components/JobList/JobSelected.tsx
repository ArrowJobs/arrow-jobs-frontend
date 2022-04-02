import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Typography,
  useTheme,
  Chip,
  IconButton,
  Divider,
} from '@mui/material';
import * as React from 'react';
import Paella from 'public/paella.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCut from '@mui/icons-material/ContentCut';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagIcon from '@mui/icons-material/Flag';
import MDEditor from 'components/PostJobForm/MDEditor';

const JobSelected: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper
        sx={{
          mb: 1,
          height: '80vh',
          // p: 2,
          maxHeight: '80vh',
          overflow: 'auto',
          bgcolor: 'transparent',
        }}
        elevation={0}
      >
        <CardHeader
          action={
            <Button variant="contained" aria-label="settings" color="secondary" id="options" onClick={handleClick}>
              <MoreVertIcon />
            </Button>
          }
        />
        <Menu
          id="options"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            {' '}
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            Save the Job Offer
          </MenuItem>
          <MenuItem onClick={handleClose}>I am not interested</MenuItem>
          <MenuItem onClick={handleClose}>Report offer</MenuItem>
        </Menu>
        <Card sx={{ mt: '-60px' }}>
          <CardMedia component="img" height="194" image={Paella} alt="Paella dish" />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Frontend Engineer
              </Typography>
              <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                Otto Car
              </Typography>
              <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                London
              </Typography>
              <Chip color="secondary" label="£40,000 - £60,000 a year" />

              <Box sx={{ display: 'flex', mt: 1, justifyContent: 'start' }}>
                <Button color="secondary" variant="contained">
                  Apply on company site
                </Button>
                <IconButton sx={{ mx: 2 }}>
                  <FavoriteBorderIcon color="secondary" fontSize={'large'} />
                </IconButton>
              </Box>
              <Typography variant="overline" component="div">
                You must create an Indeed account before continuing to the company website to apply{' '}
              </Typography>
              <Divider />
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p><strong>At Otto Car, we're building in-house world-leading fleet management software. We are looking for creative engineers to join us!</strong>
We're looking to form our first technology team, and you'll be working at our headquarters in Hammersmith alongside people from most teams in the company including our claims, credit control, servicing and marketing teams. Our sales team is spread across several branches in London and other cities. We schedule regular learning sessions for the whole team to understand more about all aspects of the company and the industry.</p>
<p>We are a team of 50 that have a variety of different backgrounds, and are proud to be growing. We'd love to have you join us.</p>
<p><strong>At Otto Car, you'll get to work with a lot of exciting new technology:</strong></p>
<p>We rely mainly on:</p>
<ul>
<li>Vue.js for our user interfaces</li>
<li>Nuxt.js and the Serverless Framework for server-side setup</li>
<li>React Native for cross-platform mobile apps</li>
<li>Wordpress for our front-facing website (but you won't be working with this much)
Our interview process typically consists of an initial phone screen, a take-home code task, and a half-day on-site interview. We will ask for references, and might ask to see something you've recently built (we don't mind if it's something you built personally at a hackathon, or if it is something you built as part of your current or a past job).</li>
</ul>
<p>At this time, we are unable to sponsor visas for anyone willing to apply for this role.</p>
`,
                }}
              />
              <Typography variant="body1" color="text.secondary" component="div" sx={{ mt: 2 }}>
                At Otto Car, we're building in-house world-leading fleet management software. We are looking for
                creative engineers to join us! We're looking to form our first technology team, and you'll be working at
                our headquarters in Hammersmith alongside people from most teams in the company including our claims,
                credit control, servicing and marketing teams. Our sales team is spread across several branches in
                London and other cities. We schedule regular learning sessions for the whole team to understand more
                about all aspects of the company and the industry. We are a team of 50 that have a variety of different
                backgrounds, and are proud to be growing. We'd love to have you join us. At Otto Car, you'll get to work
                with a lot of exciting new technology: We rely mainly on: Vue.js for our user interfaces Nuxt.js and the
                Serverless Framework for server-side setup React Native for cross-platform mobile apps Wordpress for our
                front-facing website (but you won't be working with this much) You don't need to have a computer science
                (or similar) degree for this role. You should apply if: you like the sound of the work we do! you have
                experience developing modern front ends, ideally using a Javascript framework. you love learning and
                playing around with new tehcnologies and frameworks. you believe in clean code, simple solutions, the
                importance of testing and continuous deployment. you look forward to being in a friendly and inclusive
                team with lots of autonomy and shared ownership you enjoy taking ownership of features and products from
                the idea stage to launch. you think that a small team of empowered and passionate developers is the best
                way to deliver awesome software. you're a fan of sustainable mobility and electric vehicles. We offer
                competitive salaries based on skills and experience, ranging from £40,000 - £60,000 per annum. Working
                for Otto comes with benefits, including but not limited to: 30 days holiday (including public holidays)
                Frequent company social and sports events Discounts on cinema tickets, restaurants, shopping, and more
                Working from home one day a week Our interview process typically consists of an initial phone screen, a
                take-home code task, and a half-day on-site interview. We will ask for references, and might ask to see
                something you've recently built (we don't mind if it's something you built personally at a hackathon, or
                if it is something you built as part of your current or a past job). At this time, we are unable to
                sponsor visas for anyone willing to apply for this role.
              </Typography>
              <Divider />
              <Button variant="outlined" sx={{ my: 3 }}>
                <FlagIcon />
                Report Job
              </Button>
              <Divider />
            </CardContent>
          </Box>
          {/* <Box sx={{ margin: 'auto', maxWidth: 130 }}>
                <Image src={LiveFromSpace} width="200" height="200" alt="Company Name" />
              </Box> */}
        </Card>
      </Paper>
    </>
  );
};

export default JobSelected;
