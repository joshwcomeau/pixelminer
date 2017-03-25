import { StyleSheet } from 'aphrodite';
import { white } from '../../constants/colors';

export default StyleSheet.create({
  clickablePixelWrapper: {
    display: 'block',
    width: '100px',
    height: '100px',
    perspective: 200,
  },
  clickablePixel: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    border: 'none',
    background: white,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.25)',
    outline: 'none',
  },
});
