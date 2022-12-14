import { ActionType } from './action';
import { ActionType as errorActionType } from '../error/action';

export default function threadsReducer(state = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.CREATE_THREAD:
      return [action.payload.thread, ...state];
    case ActionType.UP_VOTE_THREAD:
      return state.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter(
                  (userId) => userId !== action.payload.userId
                )
              : thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter(
                  (userId) => userId !== action.payload.userId
                )
              : thread.downVotesBy,
          };
        }
        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return state.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter(
                  (userId) => userId !== action.payload.userId
                )
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter(
                  (userId) => userId !== action.payload.userId
                )
              : thread.downVotesBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case ActionType.NETURALIZE_VOTE_THREAD:
      return state.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter(
                  (userId) => userId !== action.payload.userId
                )
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter(
                  (userId) => userId !== action.payload.userId
                )
              : thread.downVotesBy,
          };
        }
        return thread;
      });
    case errorActionType.ERROR:
      return action.payload.error;
    default:
      return state;
  }
}
