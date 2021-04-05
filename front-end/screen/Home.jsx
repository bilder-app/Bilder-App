import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTabMenu } from '../redux/actions/navigation.js';

import SearchButton from '../components/Home/SearchButton.jsx';
import ListProducts from '../components/Home/ListProducts.jsx';
import ListCategories from '../components/Home/ListCategories.jsx';
import SlideImages from '../components/Home/SlideImages.jsx';

import { useRoute } from '@react-navigation/native'


function Home() {
  const route = useRoute();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTabMenu('Home'))
  }, [route])

  return (
    <View style={styles.main}>
      <StatusBar
        translucent={false}
        backgroundColor='#E49012'
        barStyle='dark-content'
      />
      <SearchButton />

      <View style={{ height: '86%', width: '100%', position: 'absolute', top: 80 }} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', height: '100%', marginVertical: 15 }}>
            
            <SlideImages/>
        
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
