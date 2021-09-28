import 'react-native';
import React from 'react';
import Profile from '../Profile.js'
import Repository from '../Repository.js'
import App from '../../App.js'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';


jest.useFakeTimers()


test('renders correctly1', () => {
  const tree = renderer.create(
    <Profile />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly2', () => {
  const tree = renderer.create(
    <Repository />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly3', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

