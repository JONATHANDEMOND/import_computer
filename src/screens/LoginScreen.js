import { View, ScrollView } from 'react-native'
import{Text, Image} from "@rneui/base"
import { useNavigation } from '@react-navigation/native'
import {screen} from "../utils/screenName"
import React from 'react'

const LoginScreen=(props)=> {

  const{navigation}=props;
  return (
    <View>
      <Text>LOGIN</Text>
    </View>
  )
}
export default LoginScreen;