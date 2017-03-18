// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import BankInfo from '../BankInfo';
import styles from './Home.styles';


const Home = () => {
  return (
    <div className={css(styles.home)}>
      <BankInfo />
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
