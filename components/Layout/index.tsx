import { CssBaseline, AppBar, Toolbar, IconButton, Typography, styled, Box, Button, Fab } from '@mui/material';
import * as React from 'react';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import CustomDrawer from './CustomDrawer';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import router from 'next/dist/client/router';
import { AnimateSharedLayout, motion } from 'framer-motion';
import SearchBox from 'components/SearchBox';
import { hideOnScrollWindow } from 'components/HomepageFilter/FilterOptionsState';
import { useAtom } from 'jotai';
import ArrowJobsLogo from '../../public/logoLight.png';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
interface LayoutProps {}

const MainComponent = styled('main')({
  flexGrow: 1,
  justifyContent: 'center',
  margin: 'auto',
});

export const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [hideOnScroll] = useAtom(hideOnScrollWindow);

  const ToolBarStyles = {
    display: 'flex',
    backgroundColor: '#050505',
    [theme.breakpoints.up('md')]: {
      marginLeft: '120px',
      width: `calc(100% - 120px)`,
    },
  };

  const SupportBarStyles = {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'left',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '144px',
    },
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={ToolBarStyles}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpenDrawer(!openDrawer)}
            size="large"
            sx={{ color: 'white' }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Box sx={{ opacity: 0.8, height: 60, padding: 'auto', pt: '10px' }}>
            <img src={ArrowJobsLogo} style={{ height: '40px' }} />
          </Box>
          <Box sx={{ flexGrow: 0, position: 'absolute', right: 10 }}>
            <Button
              title="Open settings"
              color="secondary"
              variant="contained"
              endIcon={<div style={{ fontSize: 16 }}>🚀</div>}
            >
              Post Job
            </Button>
          </Box>
        </Toolbar>
        <Toolbar sx={SupportBarStyles}>
          <IconButton color="secondary" edge="start" onClick={() => router.back()} size="large">
            <ArrowBackTwoToneIcon />
          </IconButton>
          {hideOnScroll && (
            <Box
              sx={{
                justifyContent: 'center',
                ml: '20%',
                my: 2,
                transition: '1s',
                display: 'flex',
              }}
            >
              <Typography color="secondary" variant="h5" sx={{ lineHeight: 2.3, px: 3, fontWeight: 'medium' }}>
                Search for the{' '}
              </Typography>
              <SearchBox />
              <Typography color="secondary" variant="h5" sx={{ lineHeight: 2.3, px: 3, fontWeight: 'medium' }}>
                remote / local & hybrid jobs
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {/* AppBar Space */}
      <Box
        sx={{
          height: 112,
          [theme.breakpoints.up('md')]: {
            height: 128,
          },
        }}
      />
      <Box>
        <Button size="small" color="secondary" variant="contained" aria-label="go-to-top" onClick={() => scrollToTop()} style={{height: '60px', borderRadius: '50%', position: 'fixed', bottom: 20, right: 15}}>
          <ArrowUpwardIcon fontSize="medium" />
        </Button>
      </Box>

      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <CustomDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </nav>
      <MainComponent>
        {/* <div className={classes.toolbar} /> */}
        <AnimateSharedLayout>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
          >
            {props.children}
          </motion.div>
        </AnimateSharedLayout>
      </MainComponent>
    </div>
  );
};
