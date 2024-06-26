import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image} from "react-native";
import React, { useState } from 'react';
import Button from './components/Button';
import Games from './components/Games';
import gamedata from './assets/Data/Games.json'


castlevania = require("./assets/images/Castlevania_1_cover.png")
hollow_knight = require("./assets/images/hollow_knight.jpg")
pong = require("./assets/images/pong.png")


export default function App() {

const [imageindex, switchimage] = useState(0)
const [active, setactive] = useState(null)

function setImageIndex(index) {
switchimage(index)
setactive(index)
}


const images = [castlevania, hollow_knight, pong]
  return (
    <View style={styles.container}>
        <Games games={gamedata} gameimages={images} gameindex={imageindex} />
        <Button label="1" onPress={()=> setImageIndex(0)} isActive={active === 0}/>
        <Button label="2" onPress={()=> setImageIndex(1)} isActive={active === 1}/>
        <Button label="3" onPress={()=> setImageIndex(2)} isActive={active === 2}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
