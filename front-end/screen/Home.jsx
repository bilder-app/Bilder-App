import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TabBar from '../components/TabBar.jsx'
import ListProducts from '../components/ListProducts.jsx'
import ListCategories from '../components/ListCategories.jsx'
import { useNavigation } from '@react-navigation/native'

function Home() {
  const navigation = useNavigation();


    return (
      <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.text}>Categorías</Text>
      </View>
      <ListCategories/>
      <View style={styles.title}>
        <Text style={styles.text}>Más Vendidos</Text>
      </View>

        <ListProducts/>
        <TabBar navigation={navigation}/>
      </View>
    )
}

export default Home

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    width: '100%',
    paddingLeft: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: '#E49012',
    fontWeight: 'bold',
  }
})
