import 'react-native';
import React from 'react';
import Profile from '../Profile.js'
import Repository from '../Repository.js'
import App from '../../App.js'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';



test('renders correctly4', async () => {
    const { getByText } = render(<Profile />);

    await waitFor(() => getByText('Guanhuali2'));
  });
  
  test('renders correctly4', async () => {
    const { getByText } = render(<Repository />);

    await waitFor(() => getByText('guanhua2'));
  });
  


  