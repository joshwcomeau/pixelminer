// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import Sidebar from '../Sidebar';
import Upgrade from '../Upgrade';

import type { Upgrade as UpgradeType } from '../../types/Upgrade.type';
import styles from './LeftSidebar.styles';


const LeftSidebar = ({ upgrades }: { upgrades: UpgradeType[] }) => {
  return (
    <Sidebar title="Active Upgrades" className={styles.leftSidebar}>
      {upgrades.map(upgrade => (
        <Upgrade key={upgrade.id} data={upgrade} />
      ))}
    </Sidebar>
  );
};

LeftSidebar.propTypes = {

};

LeftSidebar.defaultProps = {
  upgrades: [
    {
      id: 'pickaxe',
      name: 'Pickaxe',
      description: 'Mine with a pickaxe instead of by hand.',
      type: 'active',
      value: 5,
      cost: 100,
      isOwned: false,
    }, {
      id: 'vacuum-cleaner',
      name: 'Vacuum Cleaner',
      description: 'Gather debris pixels that would otherwise be wasted.',
      type: 'active',
      value: 20,
      cost: 1000,
      isOwned: false,
    }, {
      id: 'matter-disruptor',
      name: 'Matter Disruptor',
      description: 'Alien technology that allows pixels to be separated quickly and precisely.',
      type: 'active',
      value: 140,
      cost: 10000,
      isOwned: false,
    }
  ]
};

export default LeftSidebar;
