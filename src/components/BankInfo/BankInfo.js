// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { getBankBalance } from '../../reducers/bank-balance.reducer';
import {
  getRevenuePerTick,
  getRevenuePerClick,
} from '../../reducers/upgrades.reducer';
import styles from './BankInfo.styles';


type Props = {
  totalAmount: number,
  revenueperTick: number,
  revenuePerClick: number,
}
const BankInfo = ({ totalAmount, revenueperTick, revenuePerClick }: Props) => (
  <div className={css(styles.bankInfo)}>
    <h2>{totalAmount} pixels</h2>
    <h5>{revenuePerClick}/click</h5>
    <h5>{revenueperTick}/second</h5>
  </div>
);

const mapStateToProps = state => ({
  totalAmount: getBankBalance(state),
  revenueperTick: getRevenuePerTick(state),
  revenuePerClick: getRevenuePerClick(state),
})

export default connect(mapStateToProps)(BankInfo);
