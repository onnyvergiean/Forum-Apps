import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Typography,
  Toolbar,
  AppBar,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { userShape } from './ThreadItem';

export default function Navigation({ authUser, signOut }) {
  return (
    <Box sx={{ flexGrow: 1, pb: 10 }}>
      <AppBar sx={{ bgcolor: '#ffffff' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Forum Apps
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black' }}>Threads</Button>
            </Link>
            <Link to="/leaderboards" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black' }}>Leaderboards</Button>
            </Link>
          </Box>
          <Avatar
            alt="Avatar Icon"
            src={authUser.avatar}
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Button variant="contained" color="error" onClick={signOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
