import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ProjectUpdates from '../screens/projectUpdates/ProjectUpdates'

const Stack = createNativeStackNavigator()

const ProjectUpdatesStack = ({navigaiton}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProjectUpdates">
      <Stack.Screen name="ProjectUpdates" component={ProjectUpdates} />
    </Stack.Navigator>
  )
}

export default ProjectUpdatesStack
