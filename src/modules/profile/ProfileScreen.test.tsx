import React from 'react';

import { render } from '@testing-library/react-native';

import { ProfileScreen } from './ProfileScreen';

describe('Module:Profile - ProfileScreen', () => {
  test('should have profile component', () => {
    const wrapper = render(<ProfileScreen />);
    expect(wrapper.getByTestId('ProfileScreen')).toBeTruthy();
  });
});
