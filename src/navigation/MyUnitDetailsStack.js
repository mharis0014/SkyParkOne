import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MyUnitDetails from '../screens/myUnitDetails/MyUnitDetails'

const Stack = createNativeStackNavigator()

const MyUnitDetailsStack = ({navigaiton}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyUnitDetails">
      <Stack.Screen name="MyUnitDetails" component={MyUnitDetails} />
    </Stack.Navigator>
  )
}

export default MyUnitDetailsStack
