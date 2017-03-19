import { StyleSheet } from 'aphrodite';
import { yellow, green, gray500 } from '../../constants/colors';


export default StyleSheet.create({
  upgrade: {
    position: 'relative',
    padding: '1rem',
    background: 'rgba(0,0,0,0.4)',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.6)',
  },

  quantityOwned: {
    position: 'absolute',
    top: '0.75rem',
    right: '0.8rem',
    fontSize: 24,
    color: gray500,
  },

  name: {
    fontSize: 17,
    marginBottom: '10px',
    fontWeight: 700,
  },

  description: {
    fontSize: 12,
    color: gray500,
    marginBottom: '10px',
    fontWeight: 200,
  },

  valueDescription: {
    fontSize: 14,
  },

  valueProposition: {
    color: green,
  },

  buttonContainer: {
    display: 'flex',
  },
});
