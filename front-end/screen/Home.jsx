import React from 'react'
import { View, Text } from 'react-native'
import TabBar from '../components/TabBar.jsx'
import ListProducts from '../components/ListProducts.jsx'
import { useNavigation } from '@react-navigation/native'

function Home() {
  const navigation = useNavigation();


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <ListProducts/>
        <TabBar navigation={navigation}/>
      </View>
    )
}

export default Home
