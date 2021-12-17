import { combineReducers } from 'redux';
import session from 'reducers/sessionReducer';
import targets from 'reducers/targetsReducer';
import { statusReducer } from '@rootstrap/redux-tools';

const AppReducer = combineReducers({
  session,
  targets,
  actionStatus: statusReducer,
});

export default AppReducer;
