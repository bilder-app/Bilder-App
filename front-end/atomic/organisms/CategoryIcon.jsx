import React from "react";
import CategoryContainer from "../../storybook/stories/CategoryContainer"
import Text from '../../storybook/stories/Text/Text'
import { View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const styles = {
  category: {
    width: '17%',
    maxWidth: 70,
    height: '46%',
    maxHeight: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderRadius: 0,
    marginVertical: '1%',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 10,
  }
};

export default function CategoryIcon({ data, onPress }) {
  const {icon, title} = data;

  return (
    <CategoryContainer style={styles.category} onPress={onPress}>
      <View style={styles.icon}>
        <FontAwesomeIcon 
          icon={icon} 
          style={styles.item}
          color={'#3F3C3C'} 
          size={30}
        />
      </View>
      <Text variant="caption" style={styles.text}>{title}</Text>
    </CategoryContainer>
  );
}
