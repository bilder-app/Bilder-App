import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FavouriteItem from '../components/Favourites/FavouriteItem.jsx' 


function Cart() {

  return (
    <View style={styles.main}>
      <Header title={'Carrito'}/>
      <View style={{width: '93%', height: '90%'}}>
        <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={ false }>
          <View style={{ width: '100%', marginTop: 15, marginBottom: 15}}>
            {[1,2,3].map((key) => {
              return( <FavouriteItem key={key}/> )
            })}
          </View>
          <View>
        {/* <Text>Hola</Text>
        <TextInput
          style={{backgroundColor: '#1db'}}
          editable
          maxLength={40}
        /> */}
      </View>
        </ScrollView>
      </View>

      <Footer title={'Continuar'}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
})
