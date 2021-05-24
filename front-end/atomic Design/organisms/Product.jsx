import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'


export default function Product({ product, showModal }) {

  const { name, shortDescription, price } = product;
  const navigation = useNavigation();

  const images = [
    'https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png',
    'https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg',
  ]

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.product} activeOpacity={ 0.5 } onPress={() => navigation.navigate('ProductDetail', product)}>
        <View style={styles.content}>
          <Image style={styles.image} source={{ uri: images[0] }}/>
        </View>
        <View style={styles.data}>
          <Text style={styles.price}>$ {price || 'Precio'}</Text>
          <Text style={styles.title}>{name || 'Nombre del producto'}</Text>
          <Text style={styles.description}>{shortDescription || 'Descripción'}</Text>
        </View>
      </TouchableOpacity>
      <View style={{height: '20%', width: '80%'}}>
        <TouchableOpacity style={styles.button} onPress={() => showModal(product)}>
          <Text style={styles.cart}>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10, 
    width: 170,
    borderRadius: 20,
    alignItems: 'center',
  },
  product: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '55%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  data: {
    // backgroundColor: '#1bc',
    width: '90%',
    height: '45%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070'
  },
  price: {
    fontSize: 20,
    color: '#3F3C3C'
  },
  title: {
    fontSize: 16,
    color: '#E49012',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    color: '#707070',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#E49012',
    width: '100%',
    height: '65%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  cart: {
    fontSize: 15,
    color: '#fff',
  },
}) 