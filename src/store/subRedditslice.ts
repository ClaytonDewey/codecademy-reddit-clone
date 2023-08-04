import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api';
import { Dispatch } from 'redux';

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
};

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { getSubredditsFailed, getSubredditsSuccess, startGetSubreddits } =
  subredditSlice.actions;

export default subredditSlice.reducer;

export const fetchSubreddits = () => async (dispatch: Dispatch) => {
  try {
    dispatch(startGetSubreddits());
    const subreddits = await getSubreddits();
    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
