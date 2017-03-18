// @flow
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import DevTools from '../components/DevTools';


export default function configureStore() {
  const middlewares = [];

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    ),
  );

  window.store = store;

  return store;
}
