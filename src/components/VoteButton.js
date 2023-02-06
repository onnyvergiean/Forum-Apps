import React from 'react';
import PropTypes from 'prop-types';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Typography from '@mui/material/Typography';

export default function VoteButton({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neturalizeVote(id);
  };
  return (
    <>
      {isUpVoted ? (
        <ThumbUpAltIcon
          fontSize="small"
          onClick={onNeutralizeVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      ) : (
        <ThumbUpOffAltIcon
          fontSize="small"
          onClick={onUpVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      )}

      <Typography
        variant="body2"
        color="text.primary"
        component="span"
        sx={{ ml: 0.5 }}
      >
        {upVotesBy.length}
      </Typography>
      {isDownVoted ? (
        <ThumbDownAltIcon
          fontSize="small"
          onClick={onNeutralizeVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      ) : (
        <ThumbDownOffAltIcon
          fontSize="small"
          onClick={onDownVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      )}
      <Typography
        variant="body2"
        color="text.primary"
        component="span"
        sx={{ ml: 0.5, mr: 1 }}
      >
        {downVotesBy.length}
      </Typography>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};
