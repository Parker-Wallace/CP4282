import { Text, Image, StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { GameContext } from "../components/GameContext"

export default function Games( props ) {
  const {gameinfo} = useContext(GameContext)
  return (
  <View style={styles.container}>
    <Text style={styles.name}>{gameinfo[props.gameindex].name}</Text>
    <Image source={{uri: `${gameinfo[props.gameindex].imagelink}`}} style={styles.image}/>
    <Text style={styles.year}>{gameinfo[props.gameindex].year}</Text>
    <Text style={styles.rating}>{gameinfo[props.gameindex].rating}</Text>
    <Text style={styles.developer}>{gameinfo[props.gameindex].developer}</Text>
</View>
  );
}

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