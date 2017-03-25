// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import styles from './Button.styles';


type Props = {
  children?: React$Element<*>,
  className: string,
  onClick: Function,
};

const Button = ({ children, onClick, className, ...delegated }: Props) => (
  <button
    className={css(styles.button, className)}
    onClick={onClick}
    {...delegated}
  >
    {children}
  </button>
);

export default Button;
