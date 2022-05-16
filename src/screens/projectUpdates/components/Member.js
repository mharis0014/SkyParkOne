import {View, Text, Image} from 'react-native'
import React from 'react'

import Images from '../../../assets/paths.js'
import Colors from '../../../constants/Colors'

const Member = props => {
  return (
    <View style={{height: 50, flexDirection: 'row', marginLeft: 20}}>
      <View>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={Images.IMAGE_PLACEHOLDER}
        />
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 8,
            backgroundColor: Colors.WHITE,
            position: 'absolute',
            bottom: -1,
            justifyContent: 'center',
            alignItems: 'center',
            right: -1,
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: Colors.LIGHT_GREEN,
            }}></View>
        </View>
      </View>
      <Text style={{color: Colors.TEXT, marginLeft: 10, alignSelf: 'center'}}>
        {props?.name}
      </Text>
    </View>
  )
}

export default Member
