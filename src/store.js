import {
  createStore,
  compose,
  applyMiddleware,
}                      from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer     from './reducers/index';

const middleware = [thunkMiddleware];

const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware)
));

export default store;
