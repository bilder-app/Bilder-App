import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style.js';

export default function Button({ onPress, children, type, outline, color }) {

  const styleButton = [
    styles.center,
    styles[type || 'large'](color),
    outline ? styles.outline(color) : null,
  ]
  const styleText = [
    styles.textSize(type || 'large'),
    styles.textColor(outline, color)
  ]

  
  return(
    <TouchableOpacity onPress={onPress} style={styleButton} activeOpacity={0.7}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  )
  
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
