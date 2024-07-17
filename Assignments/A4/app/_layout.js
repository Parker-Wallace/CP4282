import { Slot } from 'expo-router';
import NavBar from '../components/NavBar'
import { useState, useContext } from 'react';
import {SQLiteProvider, useSQLiteContext, SQLiteDatabase} from 'expo-sqlite'

export default function HomeLayout() {

  return (
    <SQLiteProvider databaseName='games.db' onInit={initializeDB}> 
    <NavBar/>
  <Slot />
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
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "Pong", "1997", "94", "Konami", "link" );
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "ROR2", "2014", "98", "Gearbox Games", "link" );
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "Path of Exile", "2014", "67", "Grinding Gear Games", "link" );
  }
  const firstRow = await db.getFirstAsync('SELECT * FROM games');
  console.log(firstRow.name, firstRow.year, firstRow.actors, firstRow.imageIndex);
}
