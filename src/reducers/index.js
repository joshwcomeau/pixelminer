import { combineReducers } from 'redux';

import bankBalance from './bank-balance.reducer';
import upgrades from './upgrades.reducer';


export default combineReducers({
  bankBalance,
  upgrades,
});
