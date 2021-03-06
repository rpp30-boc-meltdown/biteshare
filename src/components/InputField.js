import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../infrastructure/index';

const styles = StyleSheet.create({
  input: {
    padding: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  container: {
    width: '90%',
    padding: 5
  }
});

const InputField = ({ placeholder, secureText, inputValue, setInputValue }) => {
  return (
    <View style={styles.container}>
      <TextInput
        testID='emailInput1'
        elevation={5}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureText}
      />
    </View>
  );
};


export default InputField;