import api from '../../utils/api';
import { errorActionCreator } from '../error/action';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function populateLeaderboards() {
  return async (dispatch) => {
    try {
      const leaderboards = await api.getLeaderBoards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      dispatch(errorActionCreator(error.message));
    }
  };
}

export { ActionType, receiveLeaderboardsActionCreator, populateLeaderboards };
