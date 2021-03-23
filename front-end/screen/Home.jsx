import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CustomSearchBar from "../components/CustomSearchBar";
import SlideImages from "../components/SlideImages";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <View style={{ flex: 1}}>
          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <CustomSearchBar/>
          <FontAwesomeIcon icon={ faShoppingCart } size={25} style={styles.icon}  />
         </View>
         <SlideImages/>
        
      </View>
    )
}

export default Home

const styles = StyleSheet.create({
  icon:{
    color:'#E49012',
    marginTop:'20px',

  }
})