import React, {useState} from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native'

import {members, news} from '../../constants/Utils'
import Header from '../../components/Header'
import UpdatesListItem from './components/UpdatesListItem'
import Member from './components/Member'
import {
  projectUpdatesTabbarStyles,
  overViewTabbarStyles as styles,
} from '../../styles/TabbarStyles'
import {projectUpdatesTabs} from '../../constants/Utils'

const ProjectUpdates = ({navigation}) => {
  const {listTab, btnTab, btnTabActive, textTab, textTabActive} = styles,
    {container, active, total, heading} = projectUpdatesTabbarStyles

  const [status, setStatus] = useState('Updates')

  const setStatusFilter = status => setStatus(status)

  const renderUpdates = ({item}) => (
    <UpdatesListItem
      profilePic={item.profilePic}
      name={item.name}
      date={item.date}
      title={item.title}
      desc={item.desc}
      image={item.image}
    />
  )

  const separator = () => <View style={{padding: 10}} />

  const renderMembers = ({item}) => <Member name={item.name} />

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <SafeAreaView style={container}>
        <View style={listTab}>
          {projectUpdatesTabs.map(e => (
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
      {status !== 'Updates' ? (
        <View style={{marginHorizontal: 20, marginBottom: 15}}>
          <Text style={heading}>Members</Text>
          <View style={{flexDirection: 'row', marginBottom: 1}}>
            <Text style={total}>79 Members -</Text>
            <Text style={active}> 40 Active</Text>
          </View>
        </View>
      ) : null}
      <FlatList
        data={status !== 'Updates' ? members : news}
        renderItem={status !== 'Updates' ? renderMembers : renderUpdates}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  )
}

export default ProjectUpdates
