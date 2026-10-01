import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SwitchScreen from '../screens/SwitchScreen';

describe('SwitchScreen Unit & Widget Test', () => {
  it('toggles the switch state', () => {
    const { getByTestId, getByText } = render(<SwitchScreen />);
    
    // Initially OFF
    expect(getByText('Switch is OFF')).toBeTruthy();

    // Toggle switch using the testID
    const switchElement = getByTestId('customSwitch');
    fireEvent(switchElement, 'valueChange', true);

    // State changes to ON
    expect(getByText('Switch is ON')).toBeTruthy();
  });
});
