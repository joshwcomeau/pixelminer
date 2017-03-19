// @flow
import { UPGRADE_COST_INCREMENT_MULTIPLIER } from '../constants/logic';
import type { Upgrade as UpgradeType } from '../types/Upgrade.type';

// Sum the total value of all supplied upgrades, for a single tick/click.
export const getTotalRevenueOfUpgrades = (upgrades: UpgradeType[]) => (
  upgrades.reduce((total, upgrade) => (
    total + upgrade.value * upgrade.quantityOwned
  ), 0)
);

export const calculateCostOfNextUpgradePurchase = (upgrade: UpgradeType) => {
  // Upgrades get more expensive depending on the number you've purchased.
  // The first time it's purchased, use the base cost.
  //
  // For subsequent purchases, the cost should grow at a mild exponential
  // rate, eg. 1.15 (the exact value is imported from constants/logic).
  return Math.round(
    upgrade.baseCost
    * UPGRADE_COST_INCREMENT_MULTIPLIER ** upgrade.quantityOwned
  );
}
