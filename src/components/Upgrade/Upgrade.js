// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import styles from './Upgrade.styles';


const Upgrade = ({ id, name, type, value, cost, isOwned }) => {
  return (
    <div className={css(styles.upgrade)}>
      {name}
    </div>
  );
};

Upgrade.propTypes = {

};

Upgrade.defaultProps = {

};

export default Upgrade;
