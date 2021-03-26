import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faMoneyCheckAlt, faHeart, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'



export function Item({ data, navigation }) {
  const {name, icon, title} = data;
  const menu = 'Profile';


  return (
    <View style={ styles.itemBox }>
      <TouchableOpacity
        onPress={() => { navigation.navigate(name) }}
        disabled={ menu === name }
      >
      <FontAwesomeIcon 
        icon={icon} 
        style={styles.item}
        color={menu === name ? '#E49012' : '#3F3C3C'} 
        size={24}
      />
      <Text style={styles.title}>
        { title }
      </Text>  
      </TouchableOpacity>
    </View>
  )
};


export default function TabBar({ navigation }) {

   const items = [
    { name: 'Home', icon: faHome, title: 'Inicio' },
    { name: 'Offers', icon: faMoneyCheckAlt, title: 'Ofertas' },
    { name: 'Favourites', icon: faHeart, title: 'Favoritos' },
    { name: 'Order', icon: faTruck, title: 'Pedido' },
    { name: 'Profile', icon: faUser, title: 'Perfil' },
  ]

  return (
    <View style={ styles.container }>
      <View style={styles.tabBar}>
        {items.map((item, index) => {
          return (
            <Item data={item} navigation={navigation} key={index}/>
          )
        })}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tabBar: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: '100%',
  },
  itemBox: {
    height: '90%',
    width: '15%',
    paddingTop: 3,
  },
  item: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#3F3C3C', 
    textAlign: 'center',
    fontSize: 10,
  }
})