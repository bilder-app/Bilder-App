import global from '../../../storybook/stories/globalStyles.js'

export default {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.8,
  },
  large: {
    width: '85%',
    height: 37,
    borderRadius: 20,
  },
  medium: {
    width: '67%',
    height: 30,
    borderRadius: 16,
  },
  small:{
    width: 130,
    height: 25,
    borderRadius: 13,
  },

  primary: [
    { backgroundColor: global.colors.primary },
    { borderColor: global.colors.primary }
  ],
  secondary: [
    { backgroundColor: global.colors.secondary },
    { borderColor: global.colors.secondary }
  ],
  success: [
    { backgroundColor: global.colors.success },
    { borderColor: global.colors.success }
  ],
  danger: [
    { backgroundColor: global.colors.danger },
    { borderColor: global.colors.danger }
  ],


  textSize: (size) => {
    switch(size){
      case 'large':
        return { 
          fontSize: 20,
          fontWeight: 'bold'
        }
      case 'medium':
        return { 
          fontSize: 17,
          fontWeight: 'bold'
        }
      case 'small': 
        return { 
          fontSize: 13,
        }
    }
  },
  textColor: (outline, color) => {
    return {
      color: outline ? global.colors[color] : '#FFFFFF'
    }
  }
};
