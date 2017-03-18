// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { getActiveUpgrades } from '../../reducers/upgrades.reducer';
import type { Upgrade as UpgradeType } from '../../types/Upgrade.type';

import Sidebar from '../Sidebar';
import Upgrade from '../Upgrade';

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

const mapStateToProps = state => ({
  upgrades: getActiveUpgrades(state),
});

export default connect(mapStateToProps)(LeftSidebar);
