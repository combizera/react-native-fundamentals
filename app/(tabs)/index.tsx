import { StatusBar } from 'react-native';
import Home from '../screens/Home';

export default function HomeScreen() {
  return (
    <>
      <StatusBar 
        barStyle={'light-content'} 
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}