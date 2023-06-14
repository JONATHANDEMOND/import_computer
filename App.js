import {AppNavigation} from "./src/navigation/AppNavigation";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
const  App=()=> {
  return (
    <>
    <NavigationContainer>
    <AppNavigation />
    </NavigationContainer>
    </>
    
  );
};
export default App;
