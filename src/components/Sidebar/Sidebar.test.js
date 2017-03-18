/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Sidebar from './index';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
