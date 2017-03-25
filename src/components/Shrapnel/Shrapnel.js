// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../extensions/aphrodite';
import random from 'lodash/random';
import sample from 'lodash/sample';

import styles from './Shrapnel.styles';


type Props = {
  id: number,
  rootX: number,
  rootY: number,
  eraseSelf: () => void,
};

type State = {
  tick: number,
  a: number,
  b: number,
  c: number,
  direction: 'left' | 'right',
};

class Shrapnel extends Component {
  props: Props;
  state: State;
  runLoop: () => void;

  constructor(props: Props) {
    super(props);

    this.runLoop = this.runLoop.bind(this);

    this.state = {
      tick: 0,
      ...this.generateQuadraticEquationValues(),
    };
  }

  componentDidMount() {
    this.runLoop();
  }

  generateQuadraticEquationValues() {
    // Generate random values for an ax^2 + bx + c equation.
    return {
      a: random(0.1, 0.5, 0.001),
      b: random(0, 3, 0.1),
      c: random(-1, 1, 0.01),
      direction: sample(['left', 'right']),
    };
  }

  solveForY(x: number) {
    const { a, b, c } = this.state;

    return a * x ** 2 + b * x + c;
  }

  runLoop() {
    window.requestAnimationFrame(() => {
      const nextState = (state) => ({ tick: state.tick + 1 });

      this.setState(nextState, () => {
        // Is it still on the screen? Once it falls off the bottom, we want
        // to stop running this loop.
        const y = this.solveForY(this.state.tick);

        if (y < window.innerHeight) {
          this.runLoop()
        } else {
          this.props.eraseSelf();
        }

      });
    });
  }

  render() {
    const { tick, a, b, c, direction } = this.state;
    const { rootX, rootY } = this.props;

    const x = direction === 'right' ? tick : -tick;
    const y = this.solveForY(x);

    return (
      <div
        className={css(styles.shrapnelWrapper)}
        style={{
          left: rootX,
          top: rootY,
        }}
      >
        <div
          className={css(styles.shrapnel)}
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        />
      </div>
    )
  }
}

export default Shrapnel;
