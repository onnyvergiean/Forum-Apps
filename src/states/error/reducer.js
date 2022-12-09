import { ActionType } from './action';

export default function errorReducer(error = '', action = {}) {
  switch (action.type) {
    case ActionType.ERROR:
      return action.payload.error;
    default:
      return error;
  }
}
