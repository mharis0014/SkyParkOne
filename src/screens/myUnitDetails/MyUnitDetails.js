import React, {useState} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'

import {myUnitDetailsTab} from '../../constants/Utils'
import {styles} from '../../styles/UnitDetailsStyles'
import UnitDetails from './components/UnitDetails'
import Payment from './components/Payment'
import Header from '../../components/Header'

const MyUnitDetails = ({navigation}) => {
  const {
    container,
    sec1,
    heading1,
    tabContainer,
    listTab,
    btnTab,
    btnTabActive,
    textTab,
    textTabActive,
  } = styles

  const [status, setStatus] = useState('Payment Details')

  const setStatusFilter = status => setStatus(status)

  return (
    <SafeAreaView style={container}>
      <Header />
      <View style={sec1}>
        <Text style={heading1}>Unit Details</Text>
        <UnitDetails
          h1={'Floor'}
          v1={'7th Floor'}
          h2={'Unit No'}
          v2={'FC - 335'}
        />
        <UnitDetails
          h1={'Size'}
          v1={'1020 sq. ft.'}
          h2={'Purchase Rate'}
          v2={'9000 sq. ft.'}
        />
        <UnitDetails
          h1={'Price'}
          v1={'9,068,210 PKR'}
          h2={'Sold Date:'}
          v2={'09/12/2021'}
        />
      </View>
      <SafeAreaView style={tabContainer}>
        <View style={listTab}>
          {myUnitDetailsTab.map(e => (
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
      <View style={{margin: 20}}>
        <Payment
          heading={'Total Amount'}
          value={'1 crore, 1lac and 60 thousand rs'}
        />
        <Payment
          heading={'Amount Paid'}
          value={'38 lac, 11 thousand, 7 hundred and 50 rs'}
        />
        <Payment
          heading={'Total Left'}
          value={'63 lac, 48 thousand, 2 hundred and 50 rs'}
        />
      </View>
    </SafeAreaView>
  )
}

export default MyUnitDetails
