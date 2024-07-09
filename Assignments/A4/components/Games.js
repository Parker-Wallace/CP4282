import { Text, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';

export default function Games(props) {
  const db = useSQLiteContext();
  const [games, setGames] = useState([])
  const [loading, isLoading] = useState(true)

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
    <Text style={styles.name}>{games[props.gameindex].name}</Text>
    <Image source={{uri: `${games[props.gameindex].imagelink}`}} style={styles.image}/>
    <Text style={styles.year}>{games[props.gameindex].year}</Text>
    <Text style={styles.rating}>{games[props.gameindex].rating}</Text>
    <Text style={styles.developer}>{games[props.gameindex].developer}</Text>
</View>
  );
}}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 400,
    height: 500,
    marginBottom: 8,
  },
  year: {
    fontSize: 18,
    color: '#888',
    marginBottom: 4,
  },
  rating: {
    fontSize: 18,
    color: '#888',
    marginBottom: 4,
  },
  developer: {
    fontSize: 18,
    color: '#888',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
})