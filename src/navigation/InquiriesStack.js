import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Inquiries from '../screens/inquiries/Inquiries'

const Stack = createNativeStackNavigator()

const InquiriesStack = ({navigaiton}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Inquiries">
      <Stack.Screen name="Inquiries" component={Inquiries} />
    </Stack.Navigator>
  )
}

export default InquiriesStack
