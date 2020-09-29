import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

// const composeEnhancers: Function =
//  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  applyMiddleware(thunk)
  // composeEnhancers(applyMiddleware(thunk)),
);

export default store;