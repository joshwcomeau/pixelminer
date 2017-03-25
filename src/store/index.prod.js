// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import gameLoopSaga from '../sagas/game-loop.saga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(gameLoopSaga);

  return store;
}
