// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPassiveUpgrades } from '../../reducers/upgrades.reducer';
import type { Upgrade as UpgradeType } from '../../types/Upgrade.type';

import Sidebar from '../Sidebar';
import Upgrade from '../Upgrade';
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

const mapStateToProps = state => ({
  upgrades: getPassiveUpgrades(state),
});

export default connect(mapStateToProps)(RightSidebar);
