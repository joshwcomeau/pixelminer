// @flow
import type { Upgrade as UpgradeType } from '../types/Upgrade.type';

// Action Types
export const START_GAME = 'START_GAME';
export const PURCHASE_UPGRADE = 'PURCHASE_UPGRADE';
export const EARN_PASSIVE_INCOME = 'EARN_PASSIVE_INCOME';


// Action Creators
export const startGame = () => ({
  type: START_GAME,
});

export const purchaseUpgrade = (id: string, cost: number) => ({
  type: PURCHASE_UPGRADE,
  id,
  cost,
});

export const earnPassiveIncome = (amount: number) => ({
  type: EARN_PASSIVE_INCOME,
  amount,
})
