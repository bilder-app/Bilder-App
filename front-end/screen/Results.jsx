import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar.jsx'
import FavouriteItem from '../components/Favourites/FavouriteItem.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


export default function Result() {
  const properties = [
    {id:1, image: 'https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg', price: 1000, title: 'Hierro Perfil', description: '60 x 20 - 1.5mm'},
    {id:2,image: 'https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png', price: 560, title: 'Martillo Hierro', description: 'Martillo de orejas 80z'},
    {id:3,image: 'https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg', price: 1000, title: 'Hierro Perfil', description: '60 x 20 - 1.5mm'},
    {id:4,image: 'https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png', price: 560, title: 'Martillo Hierro', description: 'Martillo de orejas 80z'}
  ]

  return(
    <View style={styles.container}>
      <SearchBar/>
      <View style={styles.content}>
        <View style={{width: '75%'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>4 Resultados</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon 
            icon={faFilter} 
            color={'#AAA'} 
            size={20}
          />
          <Text style={{fontSize: 15}}>Filtros</Text>
        </View>
      </View>
      <View style={styles.results}>
        {properties.map((props, index) => {
          return(<FavouriteItem properties={props} key={index}/>)
        })}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  content: {
    height: 40, 
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#707070',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icons: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  results: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 15,
  }
})
