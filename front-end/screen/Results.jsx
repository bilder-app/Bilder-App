import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar.jsx';
import FavouriteItem from '../components/Favourites/FavouriteItem.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { searchProducts } from '../api';

export default function Result({ route }) {
  const [productsData, setProductsData] = useState();

  useEffect(() => {
    searchProducts(route.params, 1, 5).then((resp) => setProductsData(resp));
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <View style={{ width: '75%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {productsData ? productsData.products.length : '0'} Resultados
          </Text>
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon icon={faFilter} color={'#AAA'} size={20} />
          <Text style={{ fontSize: 15 }}>Filtros</Text>
        </View>
      </View>
      <View style={styles.results}>
        {productsData && productsData.products.map((props, index) => {
          return <FavouriteItem product={props} key={index} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  content: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#707070',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  icons: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  results: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 15
  }
});
