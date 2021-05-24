import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../../atomic Design/atoms/Text/Text";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function CategoryIcon({ children, onPress, style }) {
  const {icon, title} = children;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.base, style]}
      onPress={onPress}
    >
      <View style={styles.icon}>
        <FontAwesomeIcon 
          icon={icon} 
          color={'#3F3C3C'} 
          size={30}
        />
      </View>
      <Text variant="caption" style={{ fontSize: 10, textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  base: {
    width: 65,
    height: 75,
    marginVertical: 5,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
};
