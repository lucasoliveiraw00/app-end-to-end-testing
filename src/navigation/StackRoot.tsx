import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@modules/home';

const StackConfig = createNativeStackNavigator();

const StackRoot = () => (
  <StackConfig.Navigator>
    <StackConfig.Screen name="Home" component={HomeScreen} />
  </StackConfig.Navigator>
);

export { StackRoot };
