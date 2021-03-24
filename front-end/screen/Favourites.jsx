import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'


import Header from '../components/Header.jsx'
import FavouriteItem from '../components/Favourites/FavouriteItem.jsx' 


function Favourites() {

  return (
    <View style={styles.main}>
      <Header title={'Favoritos'}/>
      <View style={{width: '93%', height: '90%'}}>
        <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={ false }>
          <View style={{ width: '100%', marginTop: 15, marginBottom: 15}}>
            {[1,2,3,4,5,6,7,8,9].map((key) => {
              return( <FavouriteItem key={key}/> )
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
})
