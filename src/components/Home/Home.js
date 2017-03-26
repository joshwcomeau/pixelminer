// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import withShrapnelOnClick from '../../HOCs/withShrapnelOnClick';
import BankInfo from '../BankInfo';
import ClickableVoxel from '../ClickableVoxel';
import styles from './Home.styles';


const ClickableVoxelWithShrapnel = withShrapnelOnClick(ClickableVoxel);

const Home = () => {
  return (
    <div className={css(styles.home)}>
      <div className={css(styles.bankInfoWrapper)}>
        <BankInfo />
      </div>

      <ClickableVoxelWithShrapnel />
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
