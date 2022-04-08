import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCut from '@mui/icons-material/ContentCut';
import remoteOkRss from 'feeds/remote-ok.json';
import Link from 'next/link';

const JobListItems: React.FC = () => {
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
      {remoteOkRss.map((job) => (
        <Link href={`/?jid=${job.guid}`} scroll={false}>
          <Box sx={{ mb: 1, cursor: 'pointer' }} component="div">
            <Paper elevation={0}>
              <CardHeader
                action={
                  <IconButton aria-label="settings" id="options" onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
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
              <Card sx={{ display: 'flex', mt: '-60px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '70%', minWidth: '70%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                      {job.company}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                      {job.location}
                    </Typography>
                    <Chip color="secondary" label="£40,000 - £60,000 a year" />
                    <Box sx={{ mt: 2, overflow: 'hidden' }}>
                      <html dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }} />
                    </Box>
                  </CardContent>
                </Box>
                <Box sx={{ margin: 'auto', maxWidth: 130 }}>
                  <Image src={job.image} height="200" width="200" alt="Company Name" />
                </Box>
              </Card>
            </Paper>
          </Box>
        </Link>
      ))}
    </>
  );
};

export default JobListItems;
