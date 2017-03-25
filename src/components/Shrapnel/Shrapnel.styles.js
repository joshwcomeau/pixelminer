import { StyleSheet } from 'aphrodite';
import { white } from '../../constants/colors';

export default StyleSheet.create({
  shrapnelWrapper: {
    position: 'fixed',
    pointerEvents: 'none',
  },
  shrapnel: {
    width: 6,
    height: 6,
    background: white,
    boxShadow: '0px 2px 3px rgba(0,0,0,0.75)',
  }
});
