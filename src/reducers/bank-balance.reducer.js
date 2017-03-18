// @flow
import { PURCHASE_UPGRADE_SUCCESS, EARN_PASSIVE_INCOME } from '../actions';
import type { Action } from '../types/Action.type';


const initialState = 1000;

export default function bankBalance(
  state: number = initialState,
  action: Action
) {
  switch (action.type) {
    case EARN_PASSIVE_INCOME: {
      return state + action.amount;
    }

    case PURCHASE_UPGRADE_SUCCESS: {
      return state - action.cost;
    }

    default: return state;
  }
}


// Selectors
export const getBankBalance = state => state.bankBalance;
