// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './Sidebar.styles';


const Sidebar = () => {
  return (
    <div className={css(styles.sidebar)}>
      Your Component Here :)
    </div>
  );
};

Sidebar.propTypes = {

};

Sidebar.defaultProps = {

};

export default Sidebar;
