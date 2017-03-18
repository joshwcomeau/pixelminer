// @flow
import type { Action } from '../types/Action.type';

export const PURCHASE_UPGRADE_REQUEST: string = 'PURCHASE_UPGRADE_REQUEST';



export function purchaseUpgradeRequest(upgradeId: string): Action {
  return {
    type: PURCHASE_UPGRADE_REQUEST,
    upgradeId,
  }
}
