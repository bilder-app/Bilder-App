import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from './components/TabBar.jsx'
import Home from './screen/Home.jsx'
import ProductDetail from './screen/ProductDetail.jsx'
import Favourites from './screen/Favourites.jsx'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {

  function TabBarNavigator () {
    return(
      <Tab.Navigator initialRouteName='Home' tabBar={(props) => <TabBar {...props}/>} >
        {/* Acá van los menu del tabBar */}
        <Tab.Screen name='Home' component={ Home } />
        <Tab.Screen name='Favourites' component={ Favourites } />


      </Tab.Navigator>
    )
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabBarNavigator' component={ TabBarNavigator }/>
        {/* Acá van las pantallas sin tabBar */}
        <Stack.Screen name='ProductDetail' component={ ProductDetail } />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
