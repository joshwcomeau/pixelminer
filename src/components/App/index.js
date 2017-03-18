// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const App = () => {
  return (
    <div className={css(styles.app)}>
      Your Component Here :)
    </div>
  );
};

App.propTypes = {

};

App.defaultProps = {

};

export default App;
