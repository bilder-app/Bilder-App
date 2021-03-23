import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screen/Home.jsx'
import TabBar from './components/TabBar.jsx'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {

  function TabBarNavigator () {
    return(
      <Tab.Navigator initialRouteName='Home' tabBar={(props) => <TabBar {...props}/>} >
        <Tab.Screen name='Home' component={ Home } />
        {/* Acá van los menu del tabBar */}

      </Tab.Navigator>
    )
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabBarNavigator' component={ TabBarNavigator }/>
        <Stack.Screen name="Home" component={Home} />
        {/* Acá van las pantallas sin tabBar */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}
