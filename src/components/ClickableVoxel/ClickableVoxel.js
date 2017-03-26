// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css } from '../../extensions/aphrodite';

import { clickVoxel } from '../../actions';
import { getRevenuePerClick } from '../../reducers/upgrades.reducer';

import Shrapnel from '../Shrapnel';
import styles, { VOXEL_SIZE } from './ClickableVoxel.styles';


type Props = {
  clickVoxel: Function,
  revenuePerClick: number,
};

class ClickableVoxel extends Component {
  props: Props;
  voxelNode: HTMLElement;
  shadowNode: HTMLElement;
  depressVoxel: (ev: MouseEvent) => void;
  releaseVoxel: () => void;

  constructor(props: Props) {
    super(props);

    this.depressVoxel = this.depressVoxel.bind(this);
    this.releaseVoxel = this.releaseVoxel.bind(this);
  }

  depressVoxel(ev) {
    const { clientX, clientY } = ev;
    const { top, left, width, height } = this.voxelNode.getBoundingClientRect();

    // We want to imagine that axes form through our voxel, meeting in the
    // center:
    //  ___________
    // |     |     |
    // |     |     |
    // |-----+-----|
    // |     |     |
    // |_____|_____|
    //
    // The middle is (0, 0),
    // The top left corner is (-1, -1),
    // the bottom right corner is (1, 1)
    //
    // Get the offset in voxels from the top-left corner of the voxel.
    const offsetWithinBoxX = clientX - left;
    const offsetWithinBoxY = clientY - top;

    const offsetFromCenterX = offsetWithinBoxX - width / 2;
    const offsetFromCenterY = offsetWithinBoxY - height / 2;

    // Get the value normalized to (-1, 1)
    const xPoint = (offsetWithinBoxX / width) * 2 - 1;
    const yPoint = ((offsetWithinBoxY / height) * 2 - 1) * -1;

    // Rotate the cube based on these positions.
    const ROTATION_MAGNITUDE = 12;
    const xRotation = yPoint * ROTATION_MAGNITUDE;
    const yRotation = xPoint * ROTATION_MAGNITUDE;

    this.voxelNode.style.transition = '0ms';
    this.shadowNode.style.transition = '0ms';

    this.voxelNode.style.transform = `
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
      scale(0.95)
      translateZ(-${VOXEL_SIZE / 2}px)
    `;

    this.shadowNode.style.transform = `
      scale(${1 + yPoint * 0.2})
      translateX(${xPoint * -20}px)
    `;
  }

  releaseVoxel() {
    this.voxelNode.style.transition = '200ms';
    this.shadowNode.style.transition = '200ms';
    this.voxelNode.style.transform = 'translateZ(-100px)';
    this.shadowNode.style.transform = 'scale(1)';
  }

  render() {
    const { clickVoxel, revenuePerClick } = this.props;

    return (
      <div className={css(styles.ClickableVoxelWrapper)}>
        <button
          ref={node => this.voxelNode = node}
          className={css(styles.ClickableVoxel)}
          onClick={() => clickVoxel(revenuePerClick)}
          onMouseDown={this.depressVoxel}
          onMouseUp={this.releaseVoxel}
          onMouseOut={this.releaseVoxel}
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

export default connect(mapStateToProps, { clickVoxel })(ClickableVoxel);
