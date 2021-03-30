import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { getProducts, showModal, hideModal } from '../../redux/actions/products.js' 
import Product from './Product.jsx'
import CartModal from '../CartModal.jsx'


function ListProducts({ products, modal, getProducts, showModal, hideModal }) {
  useEffect(() => {
    getProducts()
  }, [])
  const { isVisible, product } = modal;

  return(
   <View style={styles.container}>
      <ScrollView horizontal  pagingEnabled showsHorizontalScrollIndicator={ false }>
        <View style={styles.products}>
          {products.length ? products.map((props, index) => {
            return( <Product product={props} showModal={showModal} key={index}/> )
          })
          : null}
        </View>
        {isVisible && <CartModal product={product} hideModal={hideModal}/>}
      </ScrollView>
   </View>
  )
}

function mapStateToProps(state){
  return {
    products: state.productsList.products,
    modal: state.productsList.modal, 
  }
}
export default connect(mapStateToProps, { getProducts, showModal, hideModal })(ListProducts)


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