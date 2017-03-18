// @flow
import { delay } from 'redux-saga';
import { take, put, select } from 'redux-saga/effects';

import { START_GAME, earnPassiveIncome } from '../actions';
import { GAME_TICK_LENGTH } from '../constants/logic';
import { getRevenuePerTick } from '../reducers/upgrades.reducer';


export default function* gameLoopSaga(): Generator<*, *, *> {
  yield take(START_GAME);

  while (true) {
    // The amount the user earns each tick is
    const pixelsEarned = yield select(getRevenuePerTick);

    yield put(earnPassiveIncome(pixelsEarned));

    yield delay(GAME_TICK_LENGTH);
  }
}
