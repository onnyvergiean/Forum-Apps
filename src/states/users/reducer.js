import { ActionType } from './action';
import { ActionType as ErrorActionType } from '../error/action';

export default function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users;
    case ErrorActionType.ERROR:
      return action.payload.error;
    default:
      return users;
  }
}
