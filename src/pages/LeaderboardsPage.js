import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, Typography, Grid } from '@mui/material';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import LeaderBoardItem from '../components/LeaderboardItem';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <Container>
      <Card>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'bold', ml: 2, mt: 2 }}
        >
          Leaderboards
        </Typography>
        <Grid container spacing={12}>
          <Grid item xs={10}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ fontSize: 20, fontWeight: 'bold ', ml: 2, mt: 2 }}
            >
              10 Pengguna Teratas
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ fontSize: 20, fontWeight: 'bold ', mt: 2, ml: 4 }}
            >
              Skor
            </Typography>
          </Grid>
        </Grid>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </Card>
    </Container>
  );
}
