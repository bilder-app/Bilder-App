import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import SearchBar from '../components/SearchBar.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


export function HistoryItem({label}) {

  return(
    <TouchableOpacity 
      style={styles.historyItem}
      onPress={() => alert(`Llamar a search('${label}')`)}
    >
      <View style={styles.icons}>
        <FontAwesomeIcon 
          icon={faClock} 
          color={'#AAA'} 
          size={17}
        />
      </View>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
       <View style={styles.icons}>
        <FontAwesomeIcon 
          icon={faExternalLinkAlt} 
          color={'#AAA'} 
          size={17}
        />
      </View>
    </TouchableOpacity>
  )
}

export default function Search() {
  const history = useSelector(state => state.productsList.history);

  return(
    <View style={styles.container}>
      <SearchBar/>
      <View style={styles.history}>
        {history.map((label, index) => {
          return(<HistoryItem label={label} key={index}/>)
        })}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  history: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  historyItem: {
    height: '100%',
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#444',
    flexDirection: 'row',
  },
  icons: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    width: '80%',
    height: '100%',
    paddingLeft: 5,
    fontSize: 20,
    color: '#707070',
    justifyContent: 'center',
  },
})
