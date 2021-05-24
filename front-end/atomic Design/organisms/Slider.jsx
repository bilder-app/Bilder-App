import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'


const { width } = Dimensions.get('window')

export default function Slider({ images }) {

  return(
    <View style={styles.container}>
      <SliderBox 
        images={ images }  
        dotColor='#E49012'
        inactiveDotColor='rgba(250,250,250,0.5)'
        dotStyle={styles.dotStyle}
        circleLoop
        parentWidth={width - 30}
        resizeMethod={'resize'}
        resizeMode={'contain'}
        ImageComponentStyle={styles.image}
        imageLoadingColor='#E49012'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width - 30,
    marginVertical: 15,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  image: {
    height: '100%', 
    width: '100%',
  },
})