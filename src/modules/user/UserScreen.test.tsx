import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/core';

import { UserScreen } from './UserScreen';

const mockedNavigation = jest.fn();

(useNavigation as jest.Mock).mockImplementation(() => ({
  navigate: mockedNavigation,
}));

describe('Module:User - UserScreen', () => {
  test('should navigate for profile screen', () => {
    const wrapper = render(<UserScreen />);
    const buttonNavigation = wrapper.getByText('Profile');
    fireEvent.press(buttonNavigation);
    expect(mockedNavigation).toHaveBeenCalledWith('Profile');
  });
});
