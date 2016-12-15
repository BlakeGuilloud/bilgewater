import axios from 'axios';
import { createAction } from 'redux-actions';

import * as RiotActionTypes from '../constants/RiotActionTypes';
import API from '../constants/API';

const receiveChampion = createAction(RiotActionTypes.RECEIVE_CHAMPION);
const receiveChampions = createAction(RiotActionTypes.RECEIVE_CHAMPIONS);

export function fetchChampion(id) {
  const url = API.individualChampion(id);

  return (dispatch) => {
    return axios.get(url)
      .then((response) => {
        dispatch(receiveChampion(getChampionPayload(response.data, id)))
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
}

export function fetchChampions() {
  const url = API.champions();

  return (dispatch) => {
    return axios.get(url)
      .then(response => dispatch(receiveChampions(getChampionsPayload(response.data))))
      .catch((err) => {
        console.log('err', err);
      });
  };
}

function getChampionPayload(data, id) {
  return {
    champion: data.data[id],
  };
}

function getChampionsPayload(data) {
  return {
    champions: {
      ...data.data,
    },
    championIds: getObjectKeys(data.data),
  };
}


function getObjectKeys(object) {
  return object ? Object.keys(object).map(String) : [];
}
