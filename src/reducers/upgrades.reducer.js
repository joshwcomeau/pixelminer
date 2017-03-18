// @flow
import { createSelector } from 'reselect';

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
    isOwned: false,
  },
  vacuumcleaner: {
    id: 'vacuumcleaner',
    name: 'Vacuum Cleaner',
    description: 'Gather debris pixels that would otherwise be wasted.',
    type: 'active',
    value: 20,
    cost: 1000,
    isOwned: false,
  },
  matterdisruptor: {
    id: 'matterdisruptor',
    name: 'Matter Disruptor',
    description: 'Alien technology that allows pixels to be separated quickly and precisely.',
    type: 'active',
    value: 140,
    cost: 10000,
    isOwned: false,
  },
  worker: {
    id: 'worker',
    name: 'Worker',
    description: 'A simple worker who will mine pixels at a slow but steady rate.',
    type: 'passive',
    value: 2,
    cost: 100,
    isOwned: false,
  },
  energybeam: {
    id: 'energybeam',
    name: 'Energy Beam',
    description: 'A continuous beam that blasts pixels apart',
    type: 'passive',
    value: 5,
    cost: 1000,
    isOwned: false,
  },
  robominer2000: {
    id: 'robominer2000',
    name: 'RoboMiner 2000',
    description: 'Automate your life with this purpose-built robot miner.',
    type: 'passive',
    value: 'hi',
    cost: 10000,
    isOwned: false,
  },
};

export default function upgrades(
  state: { [key: string]: Upgrade } = initialState,
  action: Action
) {
  switch (action.type) {
    default: return state;
  }
}


// Selectors
const getUpgrades = state => state.upgrades;

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
