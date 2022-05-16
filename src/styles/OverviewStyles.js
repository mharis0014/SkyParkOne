import {Dimensions, StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 20,
    marginVertical: 15,
    width: width - 40,
    height: height * (1.1 / 2),
    backgroundColor: Colors.WHITE,
  },
})
