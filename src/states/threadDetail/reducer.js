import { ActionType } from './action';
import { ActionType as ErrorActionType } from '../error/action';

export default function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter(
              (userId) => userId !== action.payload.userId
            )
          : threadDetail.upVotesBy.concat([action.payload.userId]),
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (userId) => userId !== action.payload.userId
            )
          : threadDetail.downVotesBy,
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter(
              (userId) => userId !== action.payload.userId
            )
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (userId) => userId !== action.payload.userId
            )
          : threadDetail.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter(
              (userId) => userId !== action.payload.userId
            )
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (userId) => userId !== action.payload.userId
            )
          : threadDetail.downVotesBy,
      };
    case ActionType.CREATE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.concat([
          action.payload.comment,
          ...threadDetail.comments,
        ]),
      };
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter(
                    (userId) => userId !== action.payload.userId
                  )
                : comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (userId) => userId !== action.payload.userId
                  )
                : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter(
                    (userId) => userId !== action.payload.userId
                  )
                : comment.upVotesBy,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (userId) => userId !== action.payload.userId
                  )
                : comment.downVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };
    case ActionType.NEUTRALIZE_VOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter(
                    (userId) => userId !== action.payload.userId
                  )
                : comment.upVotesBy,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (userId) => userId !== action.payload.userId
                  )
                : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };
    case ErrorActionType.ERROR:
      return action.payload.error;
    default:
      return threadDetail;
  }
}
