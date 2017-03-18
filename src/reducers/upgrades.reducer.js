// @flow
import { createSelector } from 'reselect';

import { PURCHASE_UPGRADE_SUCCESS } from '../actions';
import type { Action } from '../types/Action.type';
import type { Upgrade } from '../types/Upgrade.type';

const initialState = {
  pickaxe: {
    id: 'pickaxe',
    name: 'Pickaxe',
    description: 'Mine with a pickaxe instead of by hand.',
    type: 'active',
    value: 5,
    cost: 100,
    quantityOwned: 0,
  },
  vacuumcleaner: {
    id: 'vacuumcleaner',
    name: 'Vacuum Cleaner',
    description: 'Gather debris pixels that would otherwise be wasted.',
    type: 'active',
    value: 20,
    cost: 1000,
    quantityOwned: 0,
  },
  matterdisruptor: {
    id: 'matterdisruptor',
    name: 'Matter Disruptor',
    description: 'Alien technology that allows pixels to be separated quickly and precisely.',
    type: 'active',
    value: 140,
    cost: 10000,
    quantityOwned: 0,
  },
  worker: {
    id: 'worker',
    name: 'Worker',
    description: 'A simple worker who will mine pixels at a slow but steady rate.',
    type: 'passive',
    value: 2,
    cost: 100,
    quantityOwned: 0,
  },
  energybeam: {
    id: 'energybeam',
    name: 'Energy Beam',
    description: 'A continuous beam that blasts pixels apart',
    type: 'passive',
    value: 5,
    cost: 1000,
    quantityOwned: 0,
  },
  robominer2000: {
    id: 'robominer2000',
    name: 'RoboMiner 2000',
    description: 'Automate your life with this purpose-built robot miner.',
    type: 'passive',
    value: 30,
    cost: 10000,
    quantityOwned: 0,
  },
};

export default function upgrades(
  state: { [key: string]: Upgrade } = initialState,
  action: Action
) {
  switch (action.type) {
    case PURCHASE_UPGRADE_SUCCESS: {
      const upgrade = state[action.id];

      console.log('purchased', upgrade);

      return {
        ...state,
        [action.id]: {
          ...upgrade,
          quantityOwned: upgrade.quantityOwned + 1,
        }
      }
    }

    default: return state;
  }
}


// Selectors
export const getUpgrades = (state: Object) => state.upgrades;

export const getPassiveUpgrades = createSelector(
  getUpgrades,
  upgrades => (
    Object.values(upgrades).filter((upgrade: Upgrade) => (
      upgrade.type === 'passive'
    ))
  )
)

export const getActiveUpgrades = createSelector(
  getUpgrades,
  upgrades => (
    Object.values(upgrades).filter((upgrade: Upgrade) => (
      upgrade.type === 'active'
    ))
  )
)
