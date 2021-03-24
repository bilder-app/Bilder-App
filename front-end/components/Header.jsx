import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function Header({icon, title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.itemBox}
        onPress={() => navigation.goBack()}
      >
        <FontAwesomeIcon 
          icon={icon} 
          style={styles.item}
          color={'#E49012'} 
          size={25}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: 0, 
    flexDirection: 'row',
  },
  itemBox: {
    // backgroundColor: '#666',
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#3F3C3C',
    fontWeight: 'bold',
  }
})