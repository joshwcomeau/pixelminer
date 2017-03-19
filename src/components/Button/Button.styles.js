import { StyleSheet } from 'aphrodite';
import { blue, darkBlue, white, gray600 } from '../../constants/colors';


export default StyleSheet.create({
  button: {
    border: 'none',
    borderBottom: '2px solid rgba(0,0,0,0.4)',
    borderRadius: 2,
    background: darkBlue,
    color: white,
    padding: '0.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    flex: 1,
    outline: 'none',

    ':hover': {
      background: blue,
    },

    ':disabled': {
      cursor: 'not-allowed',
      background: gray600,
    }
  },
});
