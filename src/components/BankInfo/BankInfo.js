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

import CurrencySymbol from '../CurrencySymbol';
import styles from './BankInfo.styles';


type Props = {
  totalAmount: number,
  revenuePerTick: number,
  revenuePerClick: number,
}
const BankInfo = ({ totalAmount, revenuePerTick, revenuePerClick }: Props) => (
  <div className={css(styles.bankInfo)}>
    <h2 className={css(styles.total)}>{totalAmount} <CurrencySymbol /></h2>
    <h5 className={css(styles.subDetail)}>
      {revenuePerClick} <CurrencySymbol />/click
    </h5>
    <h5 className={css(styles.subDetail)}>
      {revenuePerTick} <CurrencySymbol />/second
    </h5>
  </div>
);

const mapStateToProps = state => ({
  totalAmount: getBankBalance(state),
  revenuePerTick: getRevenuePerTick(state),
  revenuePerClick: getRevenuePerClick(state),
})

export default connect(mapStateToProps)(BankInfo);
