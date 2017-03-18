/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RightSidebar from './index';

describe('RightSidebar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RightSidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
