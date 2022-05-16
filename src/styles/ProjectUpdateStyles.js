import {Dimensions, StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

const {height, width} = Dimensions.get('window')

export const listItemStyles = StyleSheet.create({
  listItemContainer: {
    marginLeft: 20,
    padding: 15,
    width: width - 40,
    height: height / 1.87,
    backgroundColor: Colors.WHITE,
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sec1Text: {
    justifyContent: 'center',
    marginHorizontal: 9,
  },
  name: {
    fontWeight: '500',
    color: Colors.TEXT,
    fontSize: 14,
  },
  date: {
    fontWeight: '500',
    color: Colors.TEXT_LIGHT,
    fontSize: 10,
    marginVertical: 5,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.TEXT,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image: {
    marginVertical: 10,
    alignSelf: 'center',
    width: width - 70,
    height: height / 4,
  },
  sec3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: Colors.SECONDARY,
    fontSize: 12,
  },
  desc: {
    fontSize: 12,
    color: Colors.TEXT,
    lineHeight: 15,
    marginTop: 5,
  },
  seeMore: {
    color: Colors.TEXT_LIGHT,
    fontSize: 14,
  },
  feedbackSec: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical: 15,
  },
  separator: {
    borderBottomColor: Colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  lightText: {
    color: Colors.TEXT_LIGHT,
    fontSize: 12,
  },
  right: {
    marginRight: 5,
  },
})
