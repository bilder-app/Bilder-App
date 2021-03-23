import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function Product({ properties }) {

  const { image, price, title, description } = properties;

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: image }}/>
      </View>
      <View style={styles.data}>
        <Text style={styles.price}>$ {price || '$ Precio'}</Text>
        <Text style={styles.title}>{title || 'Nombre del producto'}</Text>
        <Text style={styles.description}>{description || 'Descripción'}</Text>
      </View>
      <View style={{height: '20%', width: '80%'}}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Añadido')}>
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
  content: {
    width: '100%',
    height: '45%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  data: {
    // backgroundColor: '#1bc',
    width: '90%',
    height: '35%',
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
  }
})