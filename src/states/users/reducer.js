import { ActionType } from './action';
import { ActionType as ErrorActionType } from '../error/action';

export default function usersReducer(state = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    case ErrorActionType.ERROR:
      return action.payload.error;
    default:
      return state;
  }
}
