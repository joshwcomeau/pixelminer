// @flow
import { delay } from 'redux-saga';
import { take, put, select } from 'redux-saga/effects';

import { START_GAME, earnPassiveIncome } from '../actions';
import { GAME_TICK_LENGTH } from '../constants/logic';
import { getPassiveUpgrades } from '../reducers/upgrades.reducer';


export default function* gameLoopSaga(): Generator<*, *, *> {
  yield take(START_GAME);

  while (true) {
    // Select the user's current passive upgrades.
    const upgrades = yield select(getPassiveUpgrades);

    // Calculate the amount of pixels earned from each passive upgrade.
    const pixelsEarned = upgrades.reduce((total, upgrade) => (
      console.log(total, upgrade.value, upgrade.quantityOwned) ||
      total + upgrade.value * upgrade.quantityOwned
    ), 0);

    yield put(earnPassiveIncome(pixelsEarned));

    yield delay(GAME_TICK_LENGTH);
  }
}
