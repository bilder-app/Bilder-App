import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


// E49012 

export default function Icon({ icon, color, style, onPress, children }) {
  return(
    <TouchableOpacity
      style={{ height: '100%', width: 35, alignItems: 'center', justifyContent: 'center', ...style}}
      onPress={onPress}
    >
    <>
      <FontAwesomeIcon icon={icon} color={color || "#CDCDCD"} size={28} />
      {children}
    </>
    </TouchableOpacity>
  )
}