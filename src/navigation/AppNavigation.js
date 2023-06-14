import { Icon } from '@rneui/base';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {login}from "../screens/LoginScreen";
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
    name={screen.account.tab}
    component={account}
    options={{title: "LOGIN"}}
    />
    </Tab.Navigator>
  );
};
const screenOptions = (route, color, size) => {
  let iconName;
  if (route.name == screen.account.tab) {
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
 


  
   
  
