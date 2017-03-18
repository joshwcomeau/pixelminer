// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import Sidebar from '../Sidebar';
import Upgrade from '../Upgrade';

import type { Upgrade as UpgradeType } from '../../types/Upgrade.type';
import styles from './RightSidebar.styles';


const RightSidebar = ({ upgrades }: { upgrades: UpgradeType[] }) => {
  return (
    <Sidebar title="Passive Upgrades" className={styles.rightSidebar}>
      {upgrades.map(upgrade => (
        <Upgrade key={upgrade.id} data={upgrade} />
      ))}
    </Sidebar>
  );
};


RightSidebar.defaultProps = {
  upgrades: [
    {
      id: 'worker',
      name: 'Worker',
      description: 'A simple worker who will mine pixels at a slow but steady rate.',
      type: 'passive',
      value: 2,
      cost: 100,
      isOwned: false,
    }, {
      id: 'energy-beam',
      name: 'Energy Beam',
      description: 'A continuous beam that blasts pixels apart',
      type: 'passive',
      value: 5,
      cost: 1000,
      isOwned: false,
    }, {
      id: 'robominer-2000',
      name: 'RoboMiner 2000',
      description: 'Automate your life with this purpose-built robot miner.',
      type: 'passive',
      value: 10,
      cost: 10000,
      isOwned: false,
    }
  ]
};

export default RightSidebar;
