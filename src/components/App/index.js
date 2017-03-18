// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from 'aphrodite';

import Home from '../Home';
import Sidebar from '../Sidebar';
import styles from './styles';


const App = () => (
  <Router>
    <div className={css(styles.app)}>
      <div className={css(styles.sidebarWrapper)}>
        <Sidebar />
      </div>

      <div className={css(styles.mainWrapper)}>
        <Route exact path="/" component={Home} />
      </div>
    </div>
  </Router>
);

export default App;
