import { Icon } from '@rneui/base';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import {screen} from "../utils/screenName";
const Tab=createBottomTabNavigator();
export const AppNavigation=()=> {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      tabBarActiveTintColor: "#2C3E50",
      tabBarInactiveTintColor: "#251180",
      tabBarIcon: ({ color, size }) => screenOptions
      (route, color, size),
    })} 
    >
    <Tab.Screen
    name={screen.welcome.tab}
    component={WelcomeScreen}
    options={{title: "BIENVENIDOS IMPORT-COMPUTER"}}
    />
    </Tab.Navigator>
  );
};
const screenOptions = (route, color, size) => {
  let iconName;
  if (route.name == screen.welcome.tab) {
    iconName = "compass-outline";
  }
  return (
    <Icon type="material-community"
     name={iconName} 
     color={color}
      size={size} 
    />
  );
}
 


  
   
  
