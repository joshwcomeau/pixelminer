// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { purchaseUpgradeRequest } from '../../actions';
import type { Upgrade as UpgradeType } from '../../types/Upgrade.type';
import type { Action as ActionType } from '../../types/Action.type';
import styles from './Upgrade.styles';


type Props = {
  data: UpgradeType,
  purchaseUpgradeRequest: ActionType,
};

const Upgrade = ({ data, purchaseUpgradeRequest }: Props) => {
  const { id, name, description, type, value, cost, quantityOwned } = data;
  const valueEvent = type === 'active' ? 'click' : 'second';

  console.log({ purchaseUpgradeRequest })

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

      <button onClick={() => purchaseUpgradeRequest(data)}>
        Purchase
      </button>
    </div>
  );
};

export default connect(null, { purchaseUpgradeRequest })(Upgrade);
