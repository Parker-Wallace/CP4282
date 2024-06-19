import React, { useState, useContext } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { GameContext } from '../components/GameContext';

const PizzaTranslator = () => {
  
let Games = useContext(GameContext)
const [index, switchindex] = useState(0)

  return (
    <View style={styles.container}>
      <h2>Item to Replace</h2>
      <View style={styles.buttonBar}>  
      <Button label={Games.gameinfo[0].name} onPress={()=> switchindex(0)} isActive={index === 0}/>
      <Button label={Games.gameinfo[1].name} onPress={()=> switchindex(1)} isActive={index === 1}/>
      <Button label={Games.gameinfo[2].name} onPress={()=> switchindex(2)} isActive={index === 2}/>
      </View>
      <h2>new info</h2>
      <TextInput
        style={styles.input}
        placeholder="Paste Image URL here"
        onChangeText={newimage => setcontent[index].imagelink(newimage)}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Name"
        onChangeText={newname => setcontent[index].name(newname)}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Rating"
        onChangeText={newrating => setcontent[index].rating(newrating)}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Year"
        onChangeText={newyear => setcontent[index].year(newyear)}
        placeholderTextColor="#888"
      />
        <TextInput
        style={styles.input}
        placeholder="New Developer"
        onChangeText={newdev => setcontent[index].developer(newdev)}
        placeholderTextColor="#888"
      />
      <Button label={"submit"} onPress={() => {
        console.log(gameupdate)
        updategame(gameupdate)
      }}></Button>
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
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default PizzaTranslator;
