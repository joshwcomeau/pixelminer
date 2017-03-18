import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  app: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
  },

  sidebarWrapper: {
    flexBasis: '250px',
  },

  mainWrapper: {
    flex: 1,
  },
});