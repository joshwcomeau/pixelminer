// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { clickPixel } from '../../actions';
import { getRevenuePerClick } from '../../reducers/upgrades.reducer';

import Shrapnel from '../Shrapnel';
import styles, { PIXEL_SIZE } from './ClickableVoxel.styles';


type Props = {
  clickPixel: Function,
  revenuePerClick: number,
};

class ClickableVoxel extends Component {
  props: Props;
  pixelNode: HTMLElement;
  shadowNode: HTMLElement;
  depressPixel: (ev: MouseEvent) => void;
  releasePixel: () => void;

  constructor(props: Props) {
    super(props);

    this.depressPixel = this.depressPixel.bind(this);
    this.releasePixel = this.releasePixel.bind(this);
  }

  depressPixel(ev) {
    const { clientX, clientY } = ev;
    const { top, left, width, height } = this.pixelNode.getBoundingClientRect();

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
    const ROTATION_MAGNITUDE = 12;
    const xRotation = yPoint * ROTATION_MAGNITUDE;
    const yRotation = xPoint * ROTATION_MAGNITUDE;

    this.pixelNode.style.transition = '0ms';
    this.shadowNode.style.transition = '0ms';

    this.pixelNode.style.transform = `
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
      scale(0.95)
      translateZ(-${PIXEL_SIZE / 2}px)
    `;

    this.shadowNode.style.transform = `
      scale(${1 + yPoint * 0.2})
      translateX(${Math.round(yRotation * -2)}px)
    `;
  }

  releasePixel() {
    this.pixelNode.style.transition = '200ms';
    this.shadowNode.style.transition = '200ms';
    this.pixelNode.style.transform = 'translateZ(-100px)';
    this.shadowNode.style.transform = 'scale(1)';
  }

  render() {
    const { clickPixel, revenuePerClick } = this.props;

    return (
      <div className={css(styles.ClickableVoxelWrapper)}>
        <button
          ref={node => this.pixelNode = node}
          className={css(styles.ClickableVoxel)}
          onClick={() => clickPixel(revenuePerClick)}
          onMouseDown={this.depressPixel}
          onMouseUp={this.releasePixel}
          onMouseOut={this.releasePixel}
        >
          <div className={css(styles.side, styles.frontSide)} />
          <div className={css(styles.side, styles.topSide)} />
          <div className={css(styles.side, styles.leftSide)} />
          <div className={css(styles.side, styles.rightSide)} />
          <div className={css(styles.side, styles.bottomSide)} />
        </button>

        <div
          className={css(styles.shadow)}
          ref={node => this.shadowNode = node}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: Object) => ({
  revenuePerClick: getRevenuePerClick(state),
});

export default connect(mapStateToProps, { clickPixel })(ClickableVoxel);
