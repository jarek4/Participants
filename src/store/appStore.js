/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from 'reducers/rootreducer';

const appStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default appStore;
