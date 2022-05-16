import React from 'react'
import {View, Text} from 'react-native'

import Colors from '../../../constants/Colors'

const {TEXT, TEXT_LIGHT} = Colors

const UnitDetails = props => {
  const {h1, v1, h2, v2} = props

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
      }}>
      <Text style={{color: TEXT}}>{h1}:</Text>
      <Text style={{color: TEXT_LIGHT}}>{v1}</Text>
      <Text style={{color: TEXT}}>{h2}:</Text>
      <Text style={{color: TEXT_LIGHT}}>{v2}</Text>
    </View>
  )
}

export default UnitDetails
