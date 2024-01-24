import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useUserScreen } from './useUserScreen';

const UserScreen = () => {
  const userScreen = useUserScreen();

  return (
    <View style={styles.container} testID="UserScreen">
      <StatusBar style="auto" />
      <Text style={styles.title}>User Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={userScreen.inputValue}
        onChangeText={(text) => userScreen.onInputValue(text)}
      />
      <TouchableOpacity style={styles.button} onPress={userScreen.onDouble}>
        <Text style={styles.buttonText}>Dobrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={userScreen.onDouble}>
        <Text style={styles.buttonText}>Dobrar</Text>
      </TouchableOpacity>
      {userScreen.doubledValue !== null && (
        <Text style={styles.resultText}>
          O dobro é: {userScreen.doubledValue}
        </Text>
      )}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={userScreen.onNavigationProfile}
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
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 200,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
  resultText: {
    marginVertical: 20,
    fontSize: 16,
  },
});

export { UserScreen };
