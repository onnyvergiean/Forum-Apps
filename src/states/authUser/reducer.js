import { ActionType } from './action';
import { ActionType as ErrorActionType } from '../error/action';

export default function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    case ErrorActionType.ERROR:
      return action.payload.error;
    default:
      return authUser;
  }
}
