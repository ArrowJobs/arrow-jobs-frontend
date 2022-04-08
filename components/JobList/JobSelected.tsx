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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCut from '@mui/icons-material/ContentCut';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagIcon from '@mui/icons-material/Flag';
import Link from 'next/link';
import renderHTML from 'react-render-html';

export interface ISelectedJob {
  selectedJob?: {
    title: string;
    company: string;
    description: string;
    tags: string;
    location: string;
    pubDate: string;
    guid: string;
    link: string;
    image: string;
  };
  jid: string | string[] | undefined;
}

const JobSelected: React.FC<ISelectedJob> = ({ selectedJob, jid }) => {
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
      {jid && (
        <Paper
          sx={{
            mb: 1,
            height: '80vh',
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
          {selectedJob && (
            <Card sx={{ mt: '-60px' }}>
              <CardMedia component="img" height="194" image={selectedJob.image} alt="Paella dish" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {selectedJob.title}
                  </Typography>
                  <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                    {selectedJob.company}
                  </Typography>
                  <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                    {selectedJob.location}
                  </Typography>
                  <Chip color="secondary" label="£40,000 - £60,000 a year" />

                  <Box sx={{ display: 'flex', mt: 1, justifyContent: 'start' }}>
                    <Link href={selectedJob.link}>
                      <a target="_blank" style={{textDecoration: 'none'}}>
                        <Button color="secondary" variant="contained">
                          Apply on company site
                        </Button>
                      </a>
                    </Link>

                    <IconButton sx={{ mx: 2 }}>
                      <FavoriteBorderIcon color="secondary" fontSize={'medium'} />
                    </IconButton>
                  </Box>
                  <Typography variant="overline" component="div">
                    You must create an Indeed account before continuing to the company website to apply{' '}
                  </Typography>
                  <Divider />
                  <div>{renderHTML(selectedJob.description)}</div>
                  <Divider />
                  <Button variant="outlined" sx={{ my: 3 }}>
                    <FlagIcon />
                    Report Job
                  </Button>
                  <Divider />
                </CardContent>
              </Box>
            </Card>
          )}
        </Paper>
      )}
    </>
  );
};

export default JobSelected;
