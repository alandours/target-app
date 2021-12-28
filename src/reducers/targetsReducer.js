import { createReducer } from '@rootstrap/redux-tools';
import { topicsSuccess, targetsSuccess, createTargetSuccess } from 'actions/targetActions';

const initialState = {
  topics: null,
  targets: null,
  newTarget: null,
};

const handleTopicsSuccess = (state, { payload }) => {
  state.topics = payload;
};

const handleTargetsSuccess = (state, { payload }) => {
  state.targets = payload;
};

const handleCreateTargetSuccess = (state, { payload }) => {
  state.newTarget = payload;
};

export default createReducer(initialState, {
  [topicsSuccess]: handleTopicsSuccess,
  [targetsSuccess]: handleTargetsSuccess,
  [createTargetSuccess]: handleCreateTargetSuccess,
});
