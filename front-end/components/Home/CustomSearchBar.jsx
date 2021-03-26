import React,{useState} from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'


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
        inputContainerStyle={{backgroundColor:'#FFFFFF', height: '100%'}}
        searchIcon={{color:'#E49012', size: 25 }}
        placeholder='Buscar...'
        onChangeText = {updateSearch}
        value={state.search}
        containerStyle={{backgroundColor:'transparent', width: '87%'}}
       />
    )
}

 const styles = StyleSheet.create({
  text: {
     color:'red'
  }
})