import { View, Text } from 'react-native'
import React from 'react'
import {screen} from "../utils/screenName"
import {Button} from '@rneui/themed'
import { ListItem } from "@rneui/themed";
const login = () => {
  const products = [
    {
      name: "Mouse",
      price: 50,
    },
    {
      name: "Laptop",
      price: 1500,
    },
    {
      name: "Teclado",
      price: 80,
    },
    {
      name: "Monitor",
      price: 120,
    },
  ];
  return (
    <View>
      {products.map((product) => {
        return(
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{product.name}</ListItem.Title>
            <ListItem.Subtitle>{product.price}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
      
      })}
    </View>
  );
}

  
export default WelcomeScreen;