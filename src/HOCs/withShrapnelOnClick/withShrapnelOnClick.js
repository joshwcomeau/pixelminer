import React, { PureComponent, PropTypes } from 'react';
import random from 'lodash/random';
import range from 'lodash/range';

import Shrapnel from '../../components/Shrapnel';


export default function withShrapnelOnClick(TargetComponent) {
  type State = {
    lastClickX: ?number,
    lastClickY: ?number,
    lastClickId: ?number,

  };

  class ShrapnelClickWrapper extends PureComponent {
    constructor() {
      super();

      this.handleClick = this.handleClick.bind(this);
      this.removeShrapnel = this.removeShrapnel.bind(this);

      this.state = {
        shrapnel: [],
      };
    }

    handleClick(ev: MouseEvent) {
      const { clientX, clientY } = ev;

      // On every click, we generate between 3-5 new shrapnel.
      // Shrapnel will be removed from state once it's no longer rendered
      // in the window.
      const newShrapnel = range(random(1, 4)).map(() => ({
        id: Math.random(),
        rootX: clientX,
        rootY: clientY,
      }));

      this.setState({
        shrapnel: [
          ...this.state.shrapnel,
          ...newShrapnel
        ],
      });
    }

    removeShrapnel(id) {
      this.setState({
        shrapnel: this.state.shrapnel.filter(s => s.id !== id),
      });
    }

    renderShrapnel() {
      return this.state.shrapnel.map(({ id, rootX, rootY }) => (
        <Shrapnel
          key={id}
          id={id}
          rootX={rootX}
          rootY={rootY}
          eraseSelf={() => this.removeShrapnel(id)}
        />
      ));
    }

    render() {
      const { lastClickId, lastClickX, lastClickY } = this.state;

      return (
        <span onClick={this.handleClick}>
          <TargetComponent {...this.props} />

          {this.renderShrapnel()}
        </span>
      );
    }
  }

  return ShrapnelClickWrapper;
}
