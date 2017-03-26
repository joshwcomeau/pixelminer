import { StyleSheet } from 'aphrodite';
import { white, gray300, gray500, gray600 } from '../../constants/colors';

export const VOXEL_SIZE = 200;

export default StyleSheet.create({
  ClickableVoxelWrapper: {
    display: 'block',
    position: 'relative',
    width: VOXEL_SIZE,
    height: VOXEL_SIZE,
    perspective: 1000,
  },
  ClickableVoxel: {
    width: '100%',
    height: '100%',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    transformStyle: 'preserve-3d',
    transform: `translateZ(-${VOXEL_SIZE / 2}px)`,
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
    transform: `rotateY(0deg) translateZ(${VOXEL_SIZE / 2}px)`
  },
  topSide: {
    background: gray300,
    transform: `rotateX(90deg) translateZ(${VOXEL_SIZE / 2}px)`,
  },
  leftSide: {
    background: gray500,
    transform: `rotateY(-90deg) translateZ(${VOXEL_SIZE / 2}px)`,
  },
  rightSide: {
    background: gray500,
    transform: `rotateY(90deg) translateZ(${VOXEL_SIZE / 2}px)`,
  },
  bottomSide: {
    background: gray600,
    transform: `rotateX(-90deg) translateZ(${VOXEL_SIZE / 2}px)`,
  },

  shadow: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    bottom: '-55px',
    height: 20,
    borderRadius: '100%',
    background: 'rgba(0,0,0,0.25)',
    filter: 'blur(7px)',
    transition: 'opacity 200ms',
  },
});
