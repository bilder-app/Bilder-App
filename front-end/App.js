import React from "react"
import { Provider } from "react-redux"
import FlashMessage from "react-native-flash-message"

import configureStore from "./store.js"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import TabBar from "./atomic Design/molecules/TabBar/TabBar.jsx"
import Home from "./atomic Design/pages/Home.jsx"
import Search from "./atomic Design/pages/Search.jsx"
import Results from "./atomic Design/pages/Results.jsx"
import Favourites from "./atomic Design/pages/Favourites.jsx"
import Orders from "./atomic Design/pages/Orders.jsx"
import Profile from "./atomic Design/pages/Profile.jsx"
// import Cart from "./atomic Design/pages/Cart.jsx"
import ProductDetail from "./atomic Design/pages/ProductDetail.jsx"
import OrderDetail from "./atomic Design/pages/OrderDetail.jsx"
// import CategoryFilter from "./atomic Design/pages/CategoryFilter.jsx"

const store = configureStore();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function MyTabBar () {
    return(
      <Tab.Navigator initialRouteName="Cart" backBehavior="history" tabBar={(props) => <TabBar {...props}/> }>
        {/* Acá van los menu del tabBar */}
        <Tab.Screen name="Home" component={ Home } />
        <Tab.Screen name="Search" component={ Search } />
        <Tab.Screen name="Favourites" component={ Favourites } />
        <Tab.Screen name="Orders" component={ Orders } />
        <Tab.Screen name="Profile" component={ Profile } />

      </Tab.Navigator>
    )
  }

  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MyTabBar" component={ MyTabBar }/>

          {/* Acá van las pantallas sin tabBar */}
          <Stack.Screen name="ProductDetail" component={ ProductDetail } />
          {/* <Stack.Screen name="Cart" component={ Cart } /> */}
          <Stack.Screen name="Results" component={ Results } />
          <Stack.Screen name="OrderDetail" component={ OrderDetail } />
          {/* <Stack.Screen name="CategoryFilter" component={ CategoryFilter } /> */}

        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage
        position="top"
        icon="auto"
        style={{ top: -30 }}
      />
    </Provider>
  );
}
