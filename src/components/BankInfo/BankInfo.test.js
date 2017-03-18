/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import BankInfo from './index';

describe('BankInfo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BankInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
