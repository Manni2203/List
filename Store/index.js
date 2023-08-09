import {createStore, applyMiddleware} from 'redux';
import DefaultState from '../Store/Reducers/Default';
import Reducer from '../Store/Reducers';
import {LOG_OUT} from '../Store/Keys';

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = DefaultState;
  }
  return Reducer(state, action);
};

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

const index = configureStore();

module.exports = {
  store: index,
};
