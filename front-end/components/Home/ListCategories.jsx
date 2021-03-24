import React from 'react'
import { View, StyleSheet } from 'react-native'
import Category from './Category.jsx'

import { 
  faPaintRoller, faBorderAll,faBolt, faFaucet, faWrench,
  faTools, faStream, faSink, faPencilRuler, faClone
 } from '@fortawesome/free-solid-svg-icons'

 // faSun se ve como rueda de configuración

export default function ListCategories() {
  const items = [
    { name: 'Paintings', icon: faPaintRoller, title: 'Pinturas' },
    { name: 'Buildings', icon: faBorderAll, title: 'Construcción' },
    { name: 'Electricity', icon: faBolt, title: 'Electricidad' },
    { name: 'Plumbing', icon: faFaucet, title: 'Plomería' },
    { name: 'Tools', icon: faWrench, title: 'Herramientas' },
    { name: 'Hardware', icon: faTools, title: 'Ferretería' },
    { name: 'Wood', icon: faStream, title: 'Maderas' },
    { name: 'Faucet', icon: faSink, title: 'Grifería' },
    { name: 'Services', icon: faPencilRuler, title: 'Serv. & Ins.' },
    { name: 'Floors', icon: faClone, title: 'Pisos' },
  ]

  return(
    <View style={styles.container}>
      {items.map((item, index) => {
        return(
          <Category data={item} key={index}/>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
  }
})