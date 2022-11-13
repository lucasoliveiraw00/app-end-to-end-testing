import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => (
  <View style={styles.container} testID="HomeScreen">
    <Text>Home Screens</Text>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { HomeScreen };
