import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type StackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
