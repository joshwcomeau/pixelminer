type UpgradeType =
  | 'active'
  | 'passive';

export type Upgrade = {
  id: string,
  name: string,
  description: string,
  type: upgradeType,
  value: number,
  baseCost: number,
  isOwned: number,
};
