import React from 'react'
import { View, Text } from 'react-native';
import CustomSearchBar from "../components/CustomSearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <View style={{ flex: 1 }}>
          <View style={{flex:2,flexDirection:'row', justifyContent:'space-evenly'}}>
          <CustomSearchBar/>
          {/* <FontAwesomeIcon icon={faShoppingCart} color="#E49012" size={30} style={{marginTop:"20px"}}/> */}
         </View>
        
      </View>
    )
}

export default Home
