import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';

import SearchButton from '../components/Home/SearchButton.jsx';
import ListProducts from '../components/Home/ListProducts.jsx';
import ListCategories from '../components/Home/ListCategories.jsx';
import SlideImages from '../components/Home/SlideImages.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <View style={styles.main}>
      <StatusBar
        translucent={false}
        backgroundColor='#E49012'
        barStyle='dark-content'
      />
      <SearchButton />

      <View
        style={{ height: '86%', width: '100%', position: 'absolute', top: 80 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', height: '100%', marginVertical: 15 }}>
            {/* <SlideImages/> */}
            <View style={styles.imageContainer}>
              <Image source={require('../img/2.png')} style={styles.image} />
            </View>
            <View style={styles.title}>
              <Text style={styles.text}>Categorías</Text>
            </View>
            <ListCategories />

            <View style={styles.title}>
              <Text style={styles.text}>Más Vendidos</Text>
            </View>
            <ListProducts />

            <View style={styles.title}>
              <Text style={styles.text}>Productos comprados</Text>
            </View>
            <ListProducts />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
  },
  itemBox: {
    height: '100%',
    width: '13%',
  },
  item: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 120,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
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
});
