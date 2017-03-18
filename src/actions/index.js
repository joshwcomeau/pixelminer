// @flow
import type { Upgrade as UpgradeType } from '../types/Upgrade.type';

// Action Types
export const START_GAME = 'START_GAME';
export const PURCHASE_UPGRADE_REQUEST = 'PURCHASE_UPGRADE_REQUEST';
export const PURCHASE_UPGRADE_SUCCESS = 'PURCHASE_UPGRADE_SUCCESS';
export const EARN_PASSIVE_INCOME = 'EARN_PASSIVE_INCOME';


// Action Creators
export const startGame = () => ({
  type: START_GAME,
});

export const purchaseUpgradeRequest = (upgrade: UpgradeType) => ({
  type: PURCHASE_UPGRADE_REQUEST,
  upgrade,
});

export const purchaseUpgradeSuccess = (id: string, cost: number) => ({
  type: PURCHASE_UPGRADE_SUCCESS,
  id,
  cost,
});

export const earnPassiveIncome = (amount: number) => ({
  type: EARN_PASSIVE_INCOME,
  amount,
})
