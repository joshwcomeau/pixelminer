// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { clickPixel } from '../../actions';
import { getRevenuePerClick } from '../../reducers/upgrades.reducer';
import styles from './ClickablePixel.styles';

type Props = {
  clickPixel: Function,
  revenuePerClick: number,
};

const ClickablePixel = ({ clickPixel, revenuePerClick }: Props) => {
  return (
    <button
      className={css(styles.clickablePixel)}
      onClick={() => clickPixel(revenuePerClick)}
    />
  );
};

const mapStateToProps = (state: Object) => ({
  revenuePerClick: getRevenuePerClick(state),
});

export default connect(mapStateToProps, { clickPixel })(ClickablePixel);
