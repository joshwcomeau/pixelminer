import { StyleSheet } from 'aphrodite';
import { white, gray300, gray500, gray600 } from '../../constants/colors';

export const PIXEL_SIZE = 200;

export default StyleSheet.create({
  clickablePixelWrapper: {
    display: 'block',
    position: 'relative',
    width: PIXEL_SIZE,
    height: PIXEL_SIZE,
    perspective: 1000,
  },
  clickablePixel: {
    width: '100%',
    height: '100%',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    transformStyle: 'preserve-3d',
    transform: `translateZ(-${PIXEL_SIZE / 2}px)`,
  },
  side: {
    position: 'absolute',
    background: gray500,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  frontSide: {
    background: white,
    transform: `rotateY(0deg) translateZ(${PIXEL_SIZE / 2}px)`
  },
  topSide: {
    background: gray300,
    transform: `rotateX(90deg) translateZ(${PIXEL_SIZE / 2}px)`,
  },
  leftSide: {
    background: gray500,
    transform: `rotateY(-90deg) translateZ(${PIXEL_SIZE / 2}px)`,
  },
  rightSide: {
    background: gray500,
    transform: `rotateY(90deg) translateZ(${PIXEL_SIZE / 2}px)`,
  },
  bottomSide: {
    background: gray600,
    transform: `rotateX(-90deg) translateZ(${PIXEL_SIZE / 2}px)`,
  },
});
