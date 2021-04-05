import React, { useEffect } from 'react'
import {
  View,
  Text, 
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'

import {
  getProducts,
} from "../redux/actions/products.js"

import SearchBar from '../components/SearchBar.jsx'
import ListItem from '../components/Home/ListItem.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


const { height } = Dimensions.get('window')


function CategoryFilter({ products, getProducts, route }) {
  useEffect(() => {
    getProducts();
  }, []);

  return(
    <View style={styles.main}>
      <SearchBar/>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{route.params}</Text>
          <TouchableOpacity style={{marginLeft: 5}}>
            <FontAwesomeIcon
              icon={faCaretDown}
              color='#E49012' 
              size={25}
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: '94%' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ height: '100%', marginBottom: 10}}>
              {products.map((data, index) => {
                return(
                  <ListItem product={data} key={index}/>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    products: state.productsList.products,
  };
}
export default connect(mapStateToProps, { getProducts })(CategoryFilter)


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 15,
    width: '100%',
    height: height - 50,
    justifyContent: 'space-between'
  },
  header: {
    height: '6%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },

})
