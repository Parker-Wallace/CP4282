import { Text, Image, StyleSheet, View } from 'react-native';

export default function Games( props ) {

  return (
  <View style={styles.container}>
  <Text style={styles.name}>{props.games.gamedata[props.gameindex].name}</Text>
    <Image source={props.gameimages[props.gameindex]} />
    <Text style={styles.year}>{props.games.gamedata[props.gameindex].year}</Text>
    <Text style={styles.rating}>{props.games.gamedata[props.gameindex].rating}</Text>
    <Text style={styles.developer}>{props.games.gamedata[props.gameindex].developer}</Text>
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
    width: 200,
    height: 200,
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