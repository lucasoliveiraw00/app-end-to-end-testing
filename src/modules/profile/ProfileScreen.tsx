import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

const ProfileScreen = () => (
  <View style={styles.container} testID="ProfileScreen">
    <StatusBar style="auto" />
    <Text style={styles.title}>Profile Screen</Text>
    <Text>versionCode 234234</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
  },
});

export { ProfileScreen };
