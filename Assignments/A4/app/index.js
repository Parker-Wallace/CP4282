import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text} from "react-native";
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Games from '../components/Games';
import { useSQLiteContext } from "expo-sqlite";

export default function App() {
const db = useSQLiteContext();
const [currentindex, switchindex] = useState(0)
const [loading, isLoading] = useState(true)
const [games, setGames] = useState([])


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
else {
  return (
    <View style={styles.container}>
        <Games props = {games[currentindex]}/>    
        <View style={styles.buttonBar}>
          {games.map((game, index)=>
          <Button label={index + 1} onPress={()=> switchindex(index)} isActive={index === currentindex}/>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
