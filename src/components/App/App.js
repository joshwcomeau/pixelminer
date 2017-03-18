// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from '../../extensions/aphrodite';

import backgroundImage from '../../assets/images/dotbg-50x50-alpha25.png';
import Home from '../Home';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import styles from './App.styles';


const App = () => (
  <Router>
    <div
      className={css(styles.globals, styles.app)}
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className={css(styles.sidebarWrapper)}>
        <LeftSidebar />
      </div>

      <div className={css(styles.mainWrapper)}>
        <Route exact path="/" component={Home} />
      </div>

      <div className={css(styles.sidebarWrapper)}>
        <RightSidebar />
      </div>
    </div>
  </Router>
);

export default App;
