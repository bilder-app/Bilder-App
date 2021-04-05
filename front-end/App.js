import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from './components/TabBar.jsx'
import Home from './screen/Home.jsx'
import ProductDetail from './screen/ProductDetail.jsx'
import Favourites from './screen/Favourites.jsx'
import Cart from './screen/Cart.jsx'
import Search from './screen/Search.jsx'
import Results from './screen/Results.jsx'
import Order from './screen/Order.jsx'
import OrderDetail from './screen/OrderDetail.jsx'
import CategoryFilter from './screen/CategoryFilter.jsx'


const store = configureStore();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  function MyTabBar () {
    return(
      <Tab.Navigator initialRouteName='Home' tabBar={(props) => <TabBar {...props}/> }>
        {/* Acá van los menu del tabBar */}
        <Tab.Screen name='Home' component={ Home } />
        <Tab.Screen name='Favourites' component={ Favourites } />
        <Tab.Screen name='Order' component={ Order } />
      
      </Tab.Navigator>
    )
  }
  
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='MyTabBar' component={ MyTabBar }/>
          {/* Acá van las pantallas sin tabBar */}
          <Stack.Screen name='ProductDetail' component={ ProductDetail } />
          <Stack.Screen name='Cart' component={ Cart } />
          <Stack.Screen name='Search' component={ Search } />
          <Stack.Screen name='Results' component={ Results } />
          <Stack.Screen name='OrderDetail' component={ OrderDetail } />
          <Stack.Screen name='CategoryFilter' component={ CategoryFilter } />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
