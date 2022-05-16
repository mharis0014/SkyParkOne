import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import Images from '../assets/paths'
import {styles} from '../styles/HeaderStyles'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'

const Header = props => {
  const {container, logo, notification, badge, badgeCount} = styles
  return (
    <View style={container}>
      <Image style={logo} source={Images.LOGO} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[logo, notification]} onPress={props?.onPress}>
          <View style={badge}>
            <Text style={badgeCount}>12</Text>
          </View>
          <Ionicons
            name="notifications-outline"
            size={23}
            color={Colors.TEXT}
          />
        </TouchableOpacity>
        <Image
          style={[logo, {borderRadius: 22}]}
          source={Images.IMAGE_PLACEHOLDER}
        />
      </View>
    </View>
  )
}

export default Header
