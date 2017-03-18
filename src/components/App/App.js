// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { startGame } from '../../actions';
import backgroundImage from '../../assets/images/dotbg-50x50-alpha25.png';
import Home from '../Home';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import DevTools from '../DevTools';
import styles from './App.styles';


class App extends Component {
  componentDidMount() {
    this.props.startGame();
  }

  render() {
    return (
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

          <DevTools />
        </div>
      </Router>
    );
  }
}

export default connect(null, { startGame })(App);
