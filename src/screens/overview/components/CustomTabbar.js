import React, {useState} from 'react'
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native'

import {overViewTabbarStyles as styles} from '../../../styles/TabbarStyles'
import {OverviewTabs} from '../../../constants/Utils'

const CustomTabbar = () => {
  const {container, listTab, btnTab, btnTabActive, textTab, textTabActive} =
    styles

  const [status, setStatus] = useState('Food Court Shops')

  const setStatusFilter = status => setStatus(status)

  return (
    <SafeAreaView style={container}>
      <View style={listTab}>
        {OverviewTabs.map(e => (
          <TouchableOpacity
            style={[btnTab, status === e.status && btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text style={[textTab, status === e.status && textTabActive]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default CustomTabbar
