// import constants from '/constants'

const global = {
  primary: '#E49012',
  secondary: '#858585',
  success: '#28A745',
  error: '#DC3545',
}

export default {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: (color) => {
    return {
      backgroundColor: '#FFFFFF',
      borderWidth: 1.8,
      borderColor: global[color] || '#E49012',
    }
  },
  large: (color) => {
    return {
      width: '85%',
      height: 40,
      borderRadius: 20,
      backgroundColor: global[color] || '#E49012',
    }
  },
  medium: (color) => {
    return {
      width: '70%',
      height: 32,
      borderRadius: 16,
      backgroundColor: global[color] || '#52DB6C',
    }
  },
  small: (color) => {
    return {
      width: 130,
      height: 25,
      borderRadius: 12,
      backgroundColor: global[color] || '#E49012',
    }
  },

  textSize: (type) => {
    switch(type){
      case 'large':
        return { 
          fontSize: 20,
          fontWeight: 'bold'
        }
      case 'medium':
        return { 
          fontSize: 15,
          fontWeight: 'bold'
        }
      case 'small': 
        return { 
          fontSize: 12,
        }
    }
  },
  textColor: (outline, color) => {
    return {
      color: outline ? global[color] : '#FFFFFF'
    }
  }
};
