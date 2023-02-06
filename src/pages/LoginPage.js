import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Box, CssBaseline, Typography, Container } from '@mui/material';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mt: 9 }}>
          Sign in Forum Apps
        </Typography>
        <LoginInput login={onLogin} />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/register">Don&apos;t have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
