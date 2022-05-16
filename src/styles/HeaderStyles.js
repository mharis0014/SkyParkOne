import {Dimensions, StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
    width: width,
    height: height / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  logo: {
    width: 44,
    height: 44,
  },
  notification: {
    borderRadius: 7,
    marginRight: 15,
    padding: 10,
    backgroundColor: Colors.GRAY,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -7,
    right: -7,
  },
  badgeCount: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
})
