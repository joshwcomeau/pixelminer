// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import gameLoopSaga from '../sagas/game-loop.saga';
import purchaseSaga from '../sagas/purchase.saga';
import DevTools from '../components/DevTools';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    ),
  );

  sagaMiddleware.run(gameLoopSaga);
  sagaMiddleware.run(purchaseSaga);

  window.store = store;

  return store;
}
