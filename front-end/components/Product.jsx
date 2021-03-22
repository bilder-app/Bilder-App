import React from 'react'
import { View, Image, Text, Stylesheet, TouchableOpacity } from 'react-native'


export default function Product({ image, data }) {
  return(
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: image || 'https://i.pinimg.com/236x/b8/30/ae/b830ae97f4ea3700a4d1c4e701fdd898.jpg' }}/>
      </View>
      <View style={styles.data}>
        <Text>{data.price || '$ Precio'}</Text>
        <Text>{data.title || 'Nombre del producto'}</Text>
        <Text>{data.description || 'Descripción'}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log('Añadido')}>
          <Text>Agregar al Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = Stylesheet.create({
  container: {
    backgroundColor: '#1db'
  },
  image: {

  },
  data: {

  }
})