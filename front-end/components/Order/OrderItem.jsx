import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function OrderItem({ order, num }) {
  const state = {
    pending: '#707070',
    shipping: '#ffff55',
    success: '#55ff55',
    fail: '#ff5555',
  }
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pedido #000{num}</Text>
        </View>
        <View>
          <Text style={{color: '#707070', fontSize: 15}}>Abril {num+1}, 2020 - 19:32</Text>
        </View>
        <View style={[styles.state, {backgroundColor: state[order]}]}>
          <Text>{order}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.3}
        onPress={() => alert('Redirect to OrderDetail')}
      >      
        <FontAwesomeIcon 
          icon={faChevronRight} 
          color={'#707070'} 
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10
  },
  data: {
    width: '85%',
    height: '100%',
    paddingLeft: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  state: {
    width: 120,
    height: 20,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '15%',
    height: '100%',
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
});
