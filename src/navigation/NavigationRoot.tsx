import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackRoot } from './StackRoot';

const NavigationRoot = () => (
  <NavigationContainer>
    <StackRoot />
  </NavigationContainer>
);

export { NavigationRoot };
