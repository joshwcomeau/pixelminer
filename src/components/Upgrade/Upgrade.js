// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';

import styles from './Upgrade.styles';


const Upgrade = ({
  data: { id, name, description, type, value, cost, isOwned },
}) => {
  const valueEvent = type === 'active' ? 'click' : 'second';

  return (
    <div className={css(styles.upgrade)}>
      <div className={css(styles.cost)}>{cost} pixels</div>

      <h4 className={css(styles.name)}>{name}</h4>
      <p className={css(styles.description)}>{description}</p>

      <p className={css(styles.valueDescription)}>
        Improves collection by
        {' '}
        <strong className={css(styles.valueProposition)}>{value} pixels per {valueEvent}</strong>.
      </p>
    </div>
  );
};

Upgrade.propTypes = {

};

Upgrade.defaultProps = {

};

export default Upgrade;
