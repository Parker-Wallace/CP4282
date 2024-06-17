import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Paste Image URL here"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Name"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Rating"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Year"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholderTextColor="#888"
      />
        <TextInput
        style={styles.input}
        placeholder="New Developer"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    backgroundColor: '#fff',
  },
  text: {
    padding: 10,
    fontSize: 42,
    color: '#333',
  },
});

export default PizzaTranslator;
