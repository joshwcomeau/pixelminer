// @flow
import { take, put, select } from 'redux-saga/effects';

import { PURCHASE_UPGRADE_REQUEST, purchaseUpgradeSuccess } from '../actions';
import type { Action as ActionType } from '../types/Action.type';
import type { Upgrade as UpgradeType } from '../types/Upgrade.type';


export default function* purchaseSaga(): Generator<*, *, *> {
  while (true) {
    const action: Action = yield take(PURCHASE_UPGRADE_REQUEST);
    console.log('bought', action.upgrade.id, action.upgrade.cost);

    // TODO: Select from state, check to see if they can afford it.

    yield put(purchaseUpgradeSuccess(action.upgrade.id, action.upgrade.cost));
  }
}
