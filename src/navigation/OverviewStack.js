import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Overview from '../screens/overview/Overview'

const Stack = createNativeStackNavigator()

const OverviewStack = ({navigaiton}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Overview">
      <Stack.Screen name="Overview" component={Overview} />
    </Stack.Navigator>
  )
}

export default OverviewStack
