import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

 export default function Category({ data }) {
  const {name, icon, title} = data;

   return(
      <TouchableOpacity
        onPress={() => {
          console.log('Go to ' + name)
        }}
        style={ styles.category }
      >
        <View style={{width: '100%', height: '100%'}}>
          <View style={styles.itemBox}>
            <FontAwesomeIcon 
              icon={icon} 
              style={styles.item}
              color={'#3F3C3C'} 
              size={30}
            />
          </View>
          <Text style={styles.title}>
            { title }
          </Text>  
        </View>
      </TouchableOpacity>
   )
 }


 const styles = StyleSheet.create({
  category: {
    width: '17%',
    height: '49%',
    marginBottom: 10,
  },
  itemBox:{
    width: '100%',
    height: '75%',
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    borderRadius: 15,
  },
  item: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#3F3C3C', 
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  }
 })
