import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@/navigation/types';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp>();

  function handleNavigationProfile() {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container} testID="HomeScreen">
      <StatusBar style="auto" />
      <Text style={styles.title}>Home Screen</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigationProfile}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    borderRadius: 8,
    marginVertical: 40,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
});

export { HomeScreen };
