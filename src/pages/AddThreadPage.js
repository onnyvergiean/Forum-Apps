import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Card, Typography } from '@mui/material';
import { asyncCreateThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

export default function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };
  return (
    <Container sx={{ mt: 2 }}>
      <Card>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'bold', ml: 2, mt: 2 }}
        >
          Buat Thread Baru
        </Typography>
        <ThreadInput addThread={onAddThread} />
      </Card>
    </Container>
  );
}
