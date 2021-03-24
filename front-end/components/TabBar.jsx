import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faMoneyCheckAlt, faHeart, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'



export function Item({ data }) {
  const {name, icon, title} = data;
  const menu = 'Profile';

  const navigation = useNavigation();

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
        size={22}
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
            <Item data={item} key={index}/>
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
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
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
    fontSize: 12,
  }
})