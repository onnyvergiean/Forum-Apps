import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { errorActionCreator } from '../error/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(errorActionCreator(error.message));
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
