import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import CustomSearchBar from '../components/CustomSearchBar'
import ListProducts from '../components/ListProducts.jsx'
import ListCategories from '../components/ListCategories.jsx'
import SlideImages from '../components/SlideImages'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Home() {

  return (
    <View style={styles.main}>
      <StatusBar
        translucent={false}
        backgroundColor='#E49012'
        barStyle='dark-content'
      />
      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <CustomSearchBar/>
        <FontAwesomeIcon icon={ faShoppingCart } size={25} style={styles.icon}  />
        </View>
        {/* <SlideImages/> */}
        <Image 
          source={require('../img/2.png')} style={{width:'90%', height:'10%', resizeMode:'stretch', borderRadius: 10 , marginLeft: 10 ,marginRight : 10 , marginBottom: 10 }}
        />
      <View style={styles.title}>
        <Text style={styles.text}>Categorías</Text>
      </View>
      <ListCategories/>
      <View style={styles.title}>
        <Text style={styles.text}>Más Vendidos</Text>
      </View>

      <ListProducts/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
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
  },
  icon:{
    color:'#E49012',
    marginTop:100,
  },
  imagen:{
    width:'90%',
    height:'10%',
    resizeMode:'stretch',
    borderRadius:10,
    marginLeft:10,
    marginRight :10,
    marginBottom:10

  }
})
