import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@modules/home';
import { ProfileScreen } from '@modules/profile';

import { RootStackParamList } from './types';

const StackConfig = createNativeStackNavigator<RootStackParamList>();

const StackRoot = () => (
  <StackConfig.Navigator>
    <StackConfig.Screen name="Home" component={HomeScreen} />
    <StackConfig.Screen name="Profile" component={ProfileScreen} />
  </StackConfig.Navigator>
);

export { StackRoot };
