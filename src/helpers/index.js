// @flow
import type { Upgrade as UpgradeType } from '../types/Upgrade.type';

// Sum the total value of all supplied upgrades, for a single tick/click.
export const getTotalRevenueOfUpgrades = (upgrades: UpgradeType[]) => (
  upgrades.reduce((total, upgrade) => (
    total + upgrade.value * upgrade.quantityOwned
  ), 0)
);
