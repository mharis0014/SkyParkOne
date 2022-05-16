import {Dimensions, StyleSheet} from 'react-native'
import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const overViewTabbarStyles = StyleSheet.create({
  container: {
    width: width - 80,
    height: 35,
    marginVertical: 15,
    borderRadius: 7,
    backgroundColor: Colors.DARK_GRAY,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnTab: {
    width: width / 3.85,
    flexDirection: 'row',
    backgroundColor: Colors.DARK_GRAY,
    paddingVertical: 7,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 10,
    color: Colors.TEXT_LIGHT,
  },
  btnTabActive: {
    backgroundColor: Colors.WHITE,
    margin: 4,
    borderRadius: 5,
  },
  textTabActive: {
    color: Colors.TEXT,
  },
})

export const projectUpdatesTabbarStyles = StyleSheet.create({
  container: {
    width: width / 2,
    height: 35,
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 7,
    backgroundColor: Colors.DARK_GRAY,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.TEXT,
  },
  active: {
    fontSize: 12,
    color: Colors.LIGHT_GREEN,
  },
  total: {
    fontSize: 12,
    color: Colors.TEXT_LIGHT,
  },
})
