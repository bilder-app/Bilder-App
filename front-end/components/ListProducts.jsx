import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Product from './Product.jsx'


export default function ListProducts() {
  const properties = [
    {id:1, image: 'https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg', price: 1000, title: 'Hierro Perfil', description: '60 x 20 - 1.5mm'},
    {id:2,image: 'https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png', price: 560, title: 'Martillo Hierro', description: 'Martillo de orejas 80z'},
    {id:3,image: 'https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg', price: 1000, title: 'Hierro Perfil', description: '60 x 20 - 1.5mm'},
    {id:4,image: 'https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png', price: 560, title: 'Martillo Hierro', description: 'Martillo de orejas 80z'}
  ]

  return(
   <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
        <View style={styles.products}>
          {properties.map((props, index) => {
            return( <Product properties={props} key={index}/> )
          })}
        </View>
      </ScrollView>
   </View>
  )
}



const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
  },
  products: {
    height: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
  }
})