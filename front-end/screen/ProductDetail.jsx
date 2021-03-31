import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Slider from '../components/ProductDetail/Slider.jsx'
import { showModal } from '../redux/actions/products.js'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as faHeartFill, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


function ProductDetails({ route, navigation }) {
  const { images, name, description, price } = route.params;
  const [ isFavourite, toggleFaourite] = useState(false)
  const dispatch = useDispatch();
  const showModalDispatched = () => dispatch(showModal(route.params))

  return (
    <View style={styles.main}>
     
      <View style={{ width: '100%', height: 50, flexDirection: 'row'}}>
        <Header title={'Detalle del producto'}/>
        <View style={styles.icons}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              isFavourite ? toggleFaourite(false) : toggleFaourite(true)
            }}
          >
            <FontAwesomeIcon icon={ isFavourite ? faHeartFill : faHeart } color={'#E49012'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => alert('Compartir')}
          >
            <FontAwesomeIcon icon={faShareAlt} color={'#E49012'} size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Slider images={images}/>
        <View style={styles.data}>
          <Text style={{ fontSize: 34 }}>$ {price}</Text>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ color: '#707070' }}>{description}</Text>
        </View>
      </View>
 
      <Footer title={'Agregar al carrito'}  onPress={showModalDispatched}/>
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
  icons: {
    height: 50,
    width: 75,
    left: -90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  data: {
    width: '100%',
    marginBottom: 15,
  },

});
