import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('window')

import Colors from '../constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  sec1: {
    margin: 5,
    padding: 20,
    backgroundColor: Colors.BACKGROUND,
    height: 200,
  },
  heading1: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.TEXT,
    marginBottom: 15,
  },
  tabContainer: {
    width: width / 2,
    height: 35,
    marginHorizontal: 25,
    marginVertical: 10,
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
