/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ClickablePixel from './index';

describe('ClickablePixel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ClickablePixel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
