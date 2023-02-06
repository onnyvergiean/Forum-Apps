import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, TextField, Button } from '@mui/material';
import useInput from '../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <FormControl>
      <Box noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => login({ email, password })}
          aria-label="Login"
        >
          Sign In
        </Button>
      </Box>
    </FormControl>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
