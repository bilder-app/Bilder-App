import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Favourites() {

  return (
    <View style={styles.main}>
      <Text>Favorites Screen</Text>
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})
