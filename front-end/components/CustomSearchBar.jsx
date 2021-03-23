import React,{useState} from 'react'
import { View, TextInput, StyleSheet } from "react-native";
import {SearchBar} from 'react-native-elements'


export default function CustomSearchBar() {
        const [state, setState] = useState({
        search:''
    })
    const updateSearch = (search) =>{
        setState({search})
    }
    
    return (
       <SearchBar
       round
       lightTheme
       cancelIcon
       inputContainerStyle={{backgroundColor:'#F6F6F6'}}
       searchIcon={{color:'#E49012', size:'30px'}}
       placeholder="Buscar..."
       onChangeText = {updateSearch}
       value={state.search}
       containerStyle={{backgroundColor:'transparent'}}
       />
    )
}

 const styles = StyleSheet.create({
     text:{
         color:'red'
     }
    
})