import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export default function Icon({ icon, style, onPress }) {
  return(
    <TouchableOpacity
      style={{ height: '100%', width: 35, alignItems: 'center', justifyContent: 'center', ...style}}
      onPress={onPress}
    >
      <FontAwesomeIcon icon={icon} color="#E49012" size={25} />
    </TouchableOpacity>
  )
}