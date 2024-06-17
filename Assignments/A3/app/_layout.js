import { Slot } from 'expo-router';
import NavBar from '../components/NavBar'
import { GameContext } from "../components/GameContext"
import gamedata from "../assets/Data/Games.json"
import { useState } from 'react';

export default function HomeLayout() {
  const [gameinfo, setGameinfo] = useState(gamedata.gamedata)

  return (
    <> 
    <GameContext.Provider value={{gameinfo, setGameinfo}}> 
    <NavBar/>
  <Slot />
  </GameContext.Provider>
  </>
);
}
