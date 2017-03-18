/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Upgrade from './index';

describe('Upgrade', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Upgrade />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
