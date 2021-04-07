import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header.jsx'
import OrderItem from '../components/Order/OrderItem.jsx'
{/* <OrderItem key={index}/> */}
export default function Order() {

  const order = ['pending', 'shipping', 'success', 'fail', 'shipping', 'success', 'pending', 'fail']
  
  return(
    <View style={styles.main}>
      <Header title='Pedidos' redirectHome={true}/>
      <View style={{ height: '88%', width: '100%' }}>
        <ScrollView style={{ width: '100%' }}>
          <View style={styles.content}>
            {order.map((state, index) => {
              return( <OrderItem order={state} num={index} key={index}/> )
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 5,
  }
})