import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@/navigation/types';

const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp>();

  function handleNavigationProfile() {
    navigation.navigate('User');
  }

  return (
    <View style={styles.container} testID="ProfileScreen">
      <StatusBar style="auto" />
      <Text style={styles.title}>Profile Screen</Text>
      <Text>versionCode 345345</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigationProfile}
        >
          <Text style={styles.buttonText}>User</Text>
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

export { ProfileScreen };
