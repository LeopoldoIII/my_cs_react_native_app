import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonScreen from '../screens/ButtonScreen';

describe('ButtonScreen Widget Test', () => {
  it('renders the custom button and responds to press', () => {
    const { getByTestId, getByText } = render(<ButtonScreen />);
    
    // Check if AppBar title exists
    expect(getByText('Button Feature')).toBeTruthy();

    // Find button by testID (equivalent to ValueKey)
    const button = getByTestId('customButton');
    expect(button).toBeTruthy();

    // Simulate press
    fireEvent.press(button);
  });
});
