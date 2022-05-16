import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native'

const {height, width} = Dimensions.get('window')

import {BarChart} from 'react-native-gifted-charts'

import {
  data,
  xAxisLabelTexts,
  yAxisLabelTexts,
  constructionProgress,
} from '../../constants/Utils'
import Header from '../../components/Header'
import CustomTabbar from './components/CustomTabbar'
import Colors from '../../constants/Colors'
import {styles} from '../../styles/OverviewStyles'

const Overview = ({navigation}) => {
  const {container, priceSection} = styles

  // const ItemRender = ({img, date}) => (
  //   <View>
  //     <Text style={{color: Colors.BLACK}}>{date}</Text>
  //     <Image source={img} style={{width: 200, height: 120}} />
  //   </View>
  // )

  return (
    <SafeAreaView style={container}>
      <Header />
      <View style={priceSection}>
        <Text style={{color: Colors.TEXT, fontWeight: '500', fontSize: 18}}>
          Price index
        </Text>
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 12,
              color: Colors.TEXT_LIGHT,
            }}>
            41 Food Court Units -
          </Text>
          <Text style={{fontWeight: '500', fontSize: 12, color: Colors.TEXT}}>
            {' '}
            4 Units Left
          </Text>
        </View>
        <CustomTabbar />
        <View style={{height: height / 3, marginTop: 35}}>
          <BarChart
            maxValue={2.5}
            xAxisLabelTexts={xAxisLabelTexts}
            yAxisLabelTexts={yAxisLabelTexts}
            yAxisTextStyle={{fontSize: 8, color: Colors.PRIMARY}}
            xAxisLabelTextStyle={{fontSize: 8, color: Colors.PRIMARY}}
            minValue={0}
            data={data}
            frontColor={Colors.SECONDARY}
            isAnimated
          />
        </View>
        {/* <View style={{height: 600, width: '100%'}}>
          <FlatList
            horizontal
            scrollEnabled={true}
            data={constructionProgress}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <ItemRender img={item.img} date={item.date} />
            )}
          />
        </View> */}
      </View>
    </SafeAreaView>
  )
}

export default Overview
