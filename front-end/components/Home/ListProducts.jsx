import React, { useEffect } from 'react'

import { View, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { getProducts } from '../../redux/actions/products.js' 
import Product from './Product.jsx'


function ListProducts({ products, getProducts }) {
  useEffect(() => {
    getProducts()
  }, [])

  return(
   <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
        <View style={styles.products}>
          {products.length ? products.map((props, index) => {
            return( <Product product={props} key={index}/> )
          })
          : null}
        </View>
      </ScrollView>
   </View>
  )
}

function mapStateToProps(state){
  return {
    products: state.productsList.products,
  }
}
export default connect(mapStateToProps, { getProducts })(ListProducts)


const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    marginBottom: 25,
  },
  products: {
    height: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
  }
})