/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ClickableVoxel from './index';

describe('ClickableVoxel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ClickableVoxel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
