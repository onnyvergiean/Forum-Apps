import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Typography, TextField, Button } from '@mui/material';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };
  return (
    <>
      <Typography
        variant="body2"
        color="text.primary"
        component="span"
        sx={{ ml: 2, fontWeight: 'bold', fontSize: 14 }}
      >
        Beri Komentar
      </Typography>
      <FormControl sx={{ ml: 2, mt: 1, mb: 5 }}>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4}
          sx={{ width: 1120 }}
          value={comment}
          onChange={onCommentChange}
        />
        <Button variant="contained" sx={{ mt: 1 }} onClick={onCommentSubmit}>
          Kirim
        </Button>
      </FormControl>
    </>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
