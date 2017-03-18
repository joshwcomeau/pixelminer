import { combineReducers } from 'redux';

import bank from './bank.reducer';
import upgrades from './upgrades.reducer';


export default combineReducers({
  bank,
  upgrades,
});
