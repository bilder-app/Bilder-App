import React from "react";
import { View } from "react-native";

import Icon from '../atoms/Icon';
import Text from '../../storybook/stories/Text/Text'

import { faHome, faMoneyCheckAlt, faHeart, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'


export default function TabBar({ showTitle }) {

  const items = [
    { name: 'Home', icon: faHome, title: 'Inicio' },
    { name: 'Offers', icon: faMoneyCheckAlt, title: 'Ofertas' },
    { name: 'Favourites', icon: faHeart, title: 'Favoritos' },
    { name: 'Order', icon: faTruck, title: 'Pedido' },
    { name: 'Profile', icon: faUser, title: 'Perfil' },
  ]

  return (
    <View style={styles.container}>
      {items.map(({ name, icon, title}, index) => {
        return(
          <Icon color={index === 0 && '#E49012'} icon={icon} onPress={() => alert('redirect to ' + name)} key={index} style={{width: 40}}>
            {showTitle && <Text style={styles.text}>{title}</Text>}
          </Icon>
        )
      })}
    </View>
  );
}


const styles = {
  container: {
    width: '100%',
    height: 50,
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 9,
  }
};