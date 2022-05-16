import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import OverviewStack from './OverviewStack'
import ProjectUpdatesStack from './ProjectUpdatesStack'
import MyUnitDetailsStack from './MyUnitDetailsStack'
import InquiriesStack from './InquiriesStack'

import Colors from '../constants/Colors'

const Tab = createBottomTabNavigator()

const MainStack = ({navigation}) => {
  const {PRIMARY, SECONDARY} = Colors
  return (
    <Tab.Navigator
      initialRouteName="OverviewStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: SECONDARY,
        tabBarInactiveTintColor: PRIMARY,
      }}>
      <Tab.Screen
        name="OverviewStack"
        component={OverviewStack}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="grid-outline"
              size={20}
              color={focused ? SECONDARY : PRIMARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProjectUpdatesStack"
        component={ProjectUpdatesStack}
        options={{
          tabBarLabel: 'Project Updates',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="newspaper-outline"
              size={20}
              color={focused ? SECONDARY : PRIMARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyUnitDetailsStack"
        component={MyUnitDetailsStack}
        options={{
          tabBarLabel: 'My Unit Details',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="clipboard-edit-outline"
              size={20}
              color={focused ? SECONDARY : PRIMARY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InquiriesStack"
        component={InquiriesStack}
        options={{
          tabBarLabel: 'Inquiries',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={20}
              color={focused ? SECONDARY : PRIMARY}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainStack
