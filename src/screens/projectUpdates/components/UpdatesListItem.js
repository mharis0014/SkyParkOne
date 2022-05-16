import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import {listItemStyles} from '../../../styles/ProjectUpdateStyles'
import Colors from '../../../constants/Colors'

const UpdatesListItem = props => {
  const {
      listItemContainer,
      image,
      profilePic,
      sec1Text,
      name,
      title,
      date,
      section1,
      sec3,
      desc,
      seeMore,
      feedbackSec,
      textStyle,
      separator,
      lightText,
      right,
    } = listItemStyles,
    {TEXT_LIGHT} = Colors
  return (
    <View style={listItemContainer}>
      <View style={section1}>
        <View style={{flexDirection: 'row'}}>
          <Image style={profilePic} source={props?.profilePic} />
          <View style={sec1Text}>
            <Text style={name}>{props?.name}</Text>
            <Text style={date}>{props?.date}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={Colors.BLACK}
          />
        </TouchableOpacity>
      </View>
      <Image style={image} source={props?.image} />
      <Text style={title}>{props?.title}</Text>
      <View style={sec3}>
        <Text style={desc}>{props?.desc}</Text>
        <TouchableOpacity style={{marginTop: 17}}>
          <Text style={seeMore}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={feedbackSec}>
        <TouchableOpacity>
          <Text style={textStyle}>10 Like</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[textStyle, {marginLeft: 10}]}>5 Comment</Text>
        </TouchableOpacity>
      </View>
      <View style={separator} />
      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Fontisto
            style={right}
            name="heart-alt"
            size={18}
            color={TEXT_LIGHT}
          />
          <Text style={lightText}>Like</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <EvilIcons
            style={right}
            name="comment"
            size={25}
            color={TEXT_LIGHT}
          />
          <Text style={lightText}>Comment</Text>
        </View>
      </View>
    </View>
  )
}

export default UpdatesListItem
