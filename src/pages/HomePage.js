import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fab, Container, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ThreadsList from '../components/ThreadsList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from '../states/threads/action';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <Container>
      {Array.from(categories).map((category) => {
        if (filter === category) {
          return (
            <Button
              key={category}
              variant="contained"
              onClick={() => setFilter('')}
              sx={{ mr: 2, mb: 2 }}
            >
              {`#${category}`}
            </Button>
          );
        }
        return (
          <Button
            key={category}
            variant="outlined"
            onClick={() => setFilter(category)}
            sx={{ mr: 2, mb: 2 }}
          >
            {`#${category}`}
          </Button>
        );
      })}

      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neturalizeVote={onNeturalizeVoteThread}
      />
      <Link to="/new">
        <Fab
          color="primary"
          aria-label="add"
          sx={{ bottom: 40, right: 40, position: 'fixed' }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </Container>
  );
}

export default HomePage;
