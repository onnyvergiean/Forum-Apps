import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import errorReducer from './error/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    thread: threadReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    error: errorReducer,
  },
});

export default store;
