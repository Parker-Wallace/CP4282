import React, { useState, useContext, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { GameContext } from '../components/GameContext';
import { useSQLiteContext } from 'expo-sqlite';

const update = () => {
const [currentindex, switchindex] = useState(0)


const [newGame, updatenewGame] = useState({
  "name":"",
  "year":"",
  "dev":"",
  "rating":"",
  "imagelink":""
})

const db = useSQLiteContext();
const [games, setGames] = useState([])
const [loading, isLoading] = useState(true)

const updategames = async (name, uri, year, rating, dev) => {
  console.log(name, uri, year, rating, dev)
  await db.runAsync(`
    INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)`, name,year,rating,dev,uri);
  }

const insertNewGame = async (name, uri, year, rating, dev, gameToReplace) => {
  console.log(name, uri, year, rating, dev)
  await db.runAsync(`
    UPDATE games SET name = ?, year = ?, rating = ?, developer = ?, imagelink = ? WHERE name = ?`, name,year,rating,dev,uri,gameToReplace);
  }
useEffect(() => {
  async function setup() {
    const result = await db.getAllAsync('SELECT * FROM games');
    setGames(result);  
    isLoading(false)
  }
  setup();      

}, []);


  if (loading)
    return (
      <View style={styles.container}>
      <Text style={styles.name}>Loading</Text>
      
  </View>)
else {return (
    <View style={styles.container}>
     <Text>Item to Replace</Text>
      <View style={styles.buttonBar}> 
      {games.map((game, index)=> 
      <Button label={game.name} onPress={()=> switchindex(index)} isActive={currentindex === index}/>)}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Paste Image URL here"
        onChangeText={image => updatenewGame({...newGame, imagelink:image})}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Name"
        onChangeText={name => updatenewGame({...newGame, name:name})}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Rating"
        onChangeText={rating => updatenewGame({...newGame, rating:rating})}
        placeholderTextColor="#888"
      />
            <TextInput
        style={styles.input}
        placeholder="New Year"
        onChangeText={year => updatenewGame({...newGame, year:year})}
        placeholderTextColor="#888"
      />
        <TextInput
        style={styles.input}
        placeholder="New Developer"
        onChangeText={dev => updatenewGame({...newGame, developer:dev})}
        placeholderTextColor="#888"
      />
      <Button label={"submit"} onPress={() => {
        updategames(newGame.name, newGame.imagelink, newGame.year, newGame.rating, newGame.developer)
        
      }}></Button>
            <Button label={"Add New"} onPress={() => {
        insertNewGame(newGame.name, newGame.imagelink, newGame.year, newGame.rating, newGame.developer, games[currentindex].name)
        
      }}></Button>
    </View>
  );
}}



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

export default update;
