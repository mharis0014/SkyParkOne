import React from 'react'
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from '../../../constants/Colors'

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.button}>
      <Text style={styles.btnText}>{props?.btnText}</Text>
      <Ionicons name="arrow-forward" size={20} color={Colors.TEXT} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f7f7f7',
    marginVertical: 10,
    height: 50,
    width: Dimensions.get('window').width - 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.GRAY,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation: 5,
  },
  btnText: {
    fontSize: 16,
    color: Colors.TEXT,
    marginRight: 10,
  },
})

export default CustomButton
