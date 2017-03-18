// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import Sidebar from '../Sidebar';
import Upgrade from '../Upgrade';
import styles from './RightSidebar.styles';


const RightSidebar = ({ upgrades }) => {
  return (
    <Sidebar title="Passive Upgrades" className={styles.leftSidebar}>
      {upgrades.map(upgrade => (
        <Upgrade key={upgrade.id} data={upgrade} />
      ))}
    </Sidebar>
  );
};

RightSidebar.propTypes = {

};

RightSidebar.defaultProps = {
  upgrades: [
    {
      id: 'worker',
      name: 'Worker',
      type: 'passive',
      value: 1,
      cost: 100,
      isOwned: false,
    }, {
      id: 'server',
      name: 'Server',
      type: 'passive',
      value: 5,
      cost: 1000,
      isOwned: false,
    }, {
      id: 'automated-script',
      name: 'Automated Script',
      type: 'passive',
      value: 10,
      cost: 10000,
      isOwned: false,
    }
  ]
};

export default RightSidebar;
