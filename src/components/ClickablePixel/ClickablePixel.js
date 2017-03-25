// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { clickPixel } from '../../actions';
import { getRevenuePerClick } from '../../reducers/upgrades.reducer';

import Shrapnel from '../Shrapnel';
import styles from './ClickablePixel.styles';


type Props = {
  clickPixel: Function,
  revenuePerClick: number,
};

class ClickablePixel extends Component {
  props: Props;
  node: HTMLElement;
  depressPixel: (ev: MouseEvent) => void;
  releasePixel: () => void;

  constructor(props: Props) {
    super(props);

    this.depressPixel = this.depressPixel.bind(this);
    this.releasePixel = this.releasePixel.bind(this);
  }

  depressPixel(ev) {
    const { clientX, clientY } = ev;
    const { top, left, width, height } = this.node.getBoundingClientRect();

    // We want to imagine that axes form through our pixel, meeting in the
    // center:
    //  ___________
    // |     |     |
    // |     |     |
    // |-----X-----|
    // |     |     |
    // |_____|_____|
    //
    // The middle is (0, 0),
    // The top left corner is (-1, -1),
    // the bottom right corner is (1, 1)
    //
    // Figure out where exactly, in this cartesian plane, our click fell.
    const xPoint = (clientX - left - width / 2) / width * 2;
    const yPoint = (clientY - top - height / 2) / height * 2 * -1;

    // Rotate the cube based on these positions.
    const ROTATION_MAGNITUDE = 8;
    const xRotation = yPoint * ROTATION_MAGNITUDE;
    const yRotation = xPoint * ROTATION_MAGNITUDE;

    this.node.style.transition = '0ms';
    this.node.style.transform = `
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
      scale(0.95)
    `;
  }

  releasePixel() {
    this.node.style.transition = '200ms';
    this.node.style.transform = '';
  }

  render() {
    const { clickPixel, revenuePerClick } = this.props;

    return (
      <div className={css(styles.clickablePixelWrapper)}>
        <button
          ref={node => this.node = node}
          className={css(styles.clickablePixel)}
          onClick={() => clickPixel(revenuePerClick)}
          onMouseDown={this.depressPixel}
          onMouseUp={this.releasePixel}
          onMouseOut={this.releasePixel}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: Object) => ({
  revenuePerClick: getRevenuePerClick(state),
});

export default connect(mapStateToProps, { clickPixel })(ClickablePixel);
