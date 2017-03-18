// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import Sidebar from '../Sidebar';
import Upgrade from '../Upgrade';
import styles from './LeftSidebar.styles';


const LeftSidebar = ({ upgrades }) => {
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
      type: 'active',
      value: 5,
      cost: 100,
      isOwned: false,
    }, {
      id: 'vacuum-cleaner',
      name: 'Vacuum Cleaner',
      type: 'active',
      value: 20,
      cost: 1000,
      isOwned: false,
    }, {
      id: 'matter-disruptor',
      name: 'Matter Disruptor',
      type: 'active',
      value: 140,
      cost: 10000,
      isOwned: false,
    }
  ]
};

export default LeftSidebar;
