import { Slot } from 'expo-router';
import NavBar from '../components/NavBar'

export default function HomeLayout() {
  return (
    <>  
    <NavBar/>
  <Slot />
  </>
  
);
}
