import { StyleSheet } from '../../extensions/aphrodite';
import { indigo, gray100, gray900 } from '../../constants/colors';


export default StyleSheet.create({
  globals: {
    '*body': {
      background: gray900,
      color: gray100,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    '*a': {
      position: 'relative',
      color: indigo,
      textDecoration: 'none',
      fontWeight: 'bold',

      ':after': {
        content: '" "',
        position: 'absolute',
        bottom: '-1px',
        left: 0,
        right: 0,
        height: '2px',
        background: indigo,
        opacity: 0,
        transform: 'translateY(2px)',
        transition: 'opacity 200ms, transform 200ms',
        borderRadius: '5px',
        pointerEvents: 'none',
      },

      ':hover:after': {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },

    '*h1': {
      marginBottom: '45px',
      letterSpacing: '-1px',
      fontSize: '36px',
    },

    '*p': {
      fontSize: '16px',
      lineHeight: 1.5,
      marginBottom: '18px',
    },
  },

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
