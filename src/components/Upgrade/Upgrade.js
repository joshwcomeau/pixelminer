// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { purchaseUpgrade } from '../../actions';
import { calculateCostOfNextUpgradePurchase } from '../../helpers';
import { getBankBalance } from '../../reducers/bank-balance.reducer';
import Button from '../Button';
import CurrencySymbol from '../CurrencySymbol';
import type { Upgrade as UpgradeType } from '../../types/Upgrade.type';
import type { Action as ActionType } from '../../types/Action.type';
import styles from './Upgrade.styles';


type Props = {
  data: UpgradeType,
  cost: number,
  purchaseUpgrade: ActionType,
  isAffordable: boolean,
};

const Upgrade = ({
  data,
  purchaseUpgrade,
  cost,
  isAffordable
}: Props) => {
  const { id, name, description, type, value, quantityOwned } = data;
  const valueEvent = type === 'active' ? 'click' : 'second';

  return (
    <div className={css(styles.upgrade)}>
      <div className={css(styles.quantityOwned)}>
        {quantityOwned}
      </div>

      <h4 className={css(styles.name)}>{name}</h4>
      <p className={css(styles.description)}>{description}</p>

      <p className={css(styles.valueDescription)}>
        <strong className={css(styles.valueProposition)}>
          +{value}<CurrencySymbol />
        </strong>
        {' / '}
        {valueEvent}
      </p>

      <div className={css(styles.buttonContainer)}>
        <Button
          disabled={!isAffordable}
          onClick={() => purchaseUpgrade(id, cost)}
        >
          Purchase
          &nbsp;&nbsp;
          (<strong>{cost}<CurrencySymbol /></strong>)
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const upgrade = ownProps.data;

  const bankBalance = getBankBalance(state);

  const cost = calculateCostOfNextUpgradePurchase(upgrade);
  const isAffordable = bankBalance > cost;

  return {
    cost,
    isAffordable,
  };
};

export default connect(mapStateToProps, { purchaseUpgrade })(Upgrade);
