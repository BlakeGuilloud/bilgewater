import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RiotReducer from './RiotReducer';


const rootReducer = combineReducers({
  riot: RiotReducer,
  routing: routerReducer,
});

export default rootReducer;
