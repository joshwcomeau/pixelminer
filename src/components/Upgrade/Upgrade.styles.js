import { StyleSheet } from 'aphrodite';
import { yellow, green } from '../../constants/colors';


export default StyleSheet.create({
  upgrade: {
    position: 'relative',
    padding: '1rem',
    background: 'rgba(0,0,0,0.4)',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.6)',
  },

  name: {
    fontSize: 16,
    marginBottom: '4px',
    fontWeight: 700,
  },

  description: {
    fontSize: 14,
    marginBottom: '10px',
    fontWeight: 200,
  },

  cost: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontSize: 12,
    color: yellow,
  },

  valueDescription: {
    fontSize: 14,
  },

  valueProposition: {
    color: green,
  },
});
