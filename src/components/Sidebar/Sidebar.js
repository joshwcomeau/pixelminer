// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import styles from './Sidebar.styles';


type Props = {
  title: string,
  children: any,
  className: { [key:string]: string },
};

const Sidebar = ({ title, children, className }:Props) => {
  return (
    <div className={css(styles.sidebar, className)}>
      <h2 className={css(styles.title)}>{title}</h2>

      {children}
    </div>
  );
};

Sidebar.propTypes = {

};

Sidebar.defaultProps = {

};

export default Sidebar;
