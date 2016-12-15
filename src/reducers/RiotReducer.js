import { handleActions } from 'redux-actions';
import * as RiotActionTypes from '../constants/RiotActionTypes';

const riotReducer = handleActions({
  [RiotActionTypes.RECEIVE_CHAMPION]: (state, action) => receiveChampionData(state, action),
  [RiotActionTypes.RECEIVE_CHAMPIONS]: (state, action) => receiveChampionsData(state, action),
}, {
  champion: {},
  champions: {},
  championIds: [],
});

function receiveChampionData(state, action) {
  return {
    ...state,
    champion: action.payload.champion,
  };
}

function receiveChampionsData(state, action) {
  return {
    ...state,
    champions: {
      ...state.champions,
      ...action.payload.champions,
    },
    championIds: [...new Set([...state.championIds, ...action.payload.championIds])],
  };
}

export default riotReducer;
