import { Slot } from 'expo-router';
import NavBar from '../components/NavBar'
import { GameContext } from "../components/GameContext"
import { useState, useContext } from 'react';
import {SQLiteProvider, useSQLiteContext, SQLiteDatabase} from 'expo-sqlite'

export default function HomeLayout() {
  const [gameinfo, setGameinfo] = useState(useContext(GameContext))

  return (
    <SQLiteProvider databaseName='games.db' onInit={initializeDB}> 
    <NavBar/>
    <GameContext.Provider value={{gameinfo, setGameinfo}}> 
  <Slot />
  </GameContext.Provider>
  </SQLiteProvider>
);
}
async function initializeDB(db) {
  await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS games (name TEXT PRIMARY KEY NOT NULL, year TEXT NOT NULL, rating TEXT NOT NULL, developer TEXT NOT NULL, imagelink TEXT NOT NULL);
  `);
   const result = await db.getAllAsync('SELECT * FROM games');
  if( result.length == 0 ) {
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "Pong", "1997", "94", "Konami", "data:image/png;base64,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" );
  }
  const firstRow = await db.getFirstAsync('SELECT * FROM games');
  console.log(firstRow.name, firstRow.year, firstRow.actors, firstRow.imageIndex);
}
