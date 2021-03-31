import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'


import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Slider from '../components/ProductDetail/Slider.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as faHeartFill, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'




function ProductDetails({ route, navigation }) {
  const { images, name, description, price } = route.params;
  
  return (
    <View style={styles.main}>
      <Header title={'Detalle del producto'}/>
      <View style={styles.content}>
        <Slider images={images}/>
        <View style={styles.data}>

          <View style={styles.titleContent}>
            <Text style={{ fontSize: 34 }}>$ {price}</Text>
            <View style={styles.icons}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => alert('Añadir a favoritos')}
              >
                <FontAwesomeIcon icon={faHeart} color={'#E49012'} size={27} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                onPress={() => alert('Compartir')}
              >
                <FontAwesomeIcon icon={faShareAlt} color={'#E49012'} size={27} />
              </TouchableOpacity>
            </View>
          </View>



          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{name}</Text>

          <Text style={{ color: '#707070' }}>{description}</Text>
        </View>
      </View>
 
      <Footer title={'Agregar al carrito'}/>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#707070',
    backgroundColor: '#fff'
  },  
  data: {
    width: '100%',
    borderTopWidth: 1.5,
    borderTopColor: '#707070',
    marginBottom: 15,
  },
  titleContent: {
    width: '100%', 
    height: 45, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icons: {
    height: '100%',
    width: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
