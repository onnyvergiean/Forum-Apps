import api from '../../utils/api';
import errorActionCreator from '../error/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  ERROR_RECEIVE_USERS: 'ERROR_RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      dispatch(errorActionCreator(error.message));
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
