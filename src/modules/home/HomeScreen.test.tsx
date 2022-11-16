import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/core';

import { HomeScreen } from './HomeScreen';

const mockedNavigation = jest.fn();

describe('Module:Home - HomeScreen', () => {
  test('should navigate for profile screen', () => {
    (useNavigation as jest.Mock).mockImplementation(() => ({
      navigate: mockedNavigation,
    }));
    const wrapper = render(<HomeScreen />);
    const buttonNavigation = wrapper.getByText('Profile');
    fireEvent.press(buttonNavigation);
    expect(mockedNavigation).toHaveBeenCalledWith('Profile');
  });
});
