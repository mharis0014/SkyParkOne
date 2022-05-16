import React from 'react'
import {View, Text} from 'react-native'

import Colors from '../../../constants/Colors'

const {TEXT, TEXT_LIGHT} = Colors

const Payment = props => {
  const {heading, value} = props

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text style={{color: TEXT}}>{heading}:</Text>
      <Text style={{color: TEXT_LIGHT}}>{value}</Text>
    </View>
  )
}

export default Payment
