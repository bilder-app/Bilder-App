import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleLeft, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'


function ProductDetails({ route, navigation }) {
  const { image, title, description, price } = route.params;

  return (
    <View style={styles.main}>
      <View style={styles.product}>
        <View style={styles.header}>
          <View style={styles.insideHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon  
                icon={faArrowCircleLeft}
                style={styles.icon}
                size={20}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Detalles del Producto</Text>
          </View>
          <View style={styles.insideHeader}>
            <FontAwesomeIcon
              icon={faHeart}
              size={20}
              color='#E49012'
              style={styles.icon}
            />
            <FontAwesomeIcon
              icon={faShareAlt}
              size={20}
              style={styles.icon}
            />
          </View>
        </View>

        <Image source={{ uri: image }} style={styles.imagen} />
        <View style={{ width:'100%', height:120, flexDirection:'column', justifyContent:'space-evenly'}}>
          <Text style={{fontSize:40, fontWeight:'bold', marginTop:15, marginLeft:15, color: '#3F3C3C'}}>${price}</Text>
          <Text style={{fontSize:20, fontWeight:'bold', marginLeft:15, color: '#3F3C3C'}}>{title}</Text>
          <Text style={{fontSize:20, marginLeft:15, color: '#707070'}}>{description}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{height: '40%', width: '100%', padding:5, backgroundColor: '#fff'}}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Añadido')}>
            <Text style={styles.cart}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  product: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: 500,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
  },
  footer: {
    width: '100%',
    height: 140,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'center',
    // backgroundColor: '#ff0000'
  },
  insideHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    margin:10
  },
  button: {
    backgroundColor: '#E49012',
    width: '100%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  cart: {
    fontSize: 20,
    color: '#fff',
  },
  icon:{
    marginRight:5
  },
  imagen:{
    width:'80%',
    height: 250
  }
});
