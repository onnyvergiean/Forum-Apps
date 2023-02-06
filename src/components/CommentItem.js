import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <>
      <CardContent sx={{ pb: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Avatar Icon"
                src={owner.avatar}
                sx={{ width: 20, height: 20 }}
              />
              <Typography
                variant="body2"
                component="div"
                color="text.primary"
                sx={{ fontWeight: 'bold' }}
              >
                {owner.name}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="body2"
              color="text.primary"
              component="span"
              sx={{ ml: 10 }}
            >
              {postedAt(createdAt)}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'medium', mt: 1 }}
        >
          {parse(content)}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 1, pb: 4, pt: 2 }}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </CardActions>
      <Divider />
    </>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
export { commentShape };
