/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Shrapnel from './index';

describe('Shrapnel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Shrapnel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
