type UpgradeType =
  | 'active'
  | 'passive';

export type Upgrade = {
  id: string,
  name: string,
  description: string,
  type: upgradeType,
  value: number,
  cost: number,
  isOwned: number,
};
