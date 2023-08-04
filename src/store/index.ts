import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import subRedditReducer from './subRedditslice';

const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
