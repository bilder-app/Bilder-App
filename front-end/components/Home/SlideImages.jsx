import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';



export default function SlideImages() {
  const images = [
    require('../../img/2.png'),     
    require('../../img/3.png'),
    require('../../img/4.png'),
  ];
  const { width } = Dimensions.get('window')
  

  return (
    <View style={styles.container}>
      <SliderBox 
        images={ images }  
        dotColor='#E49012'
        inactiveDotColor='rgba(250,250,250,0.5)'
        dotStyle={styles.dotStyle}
        circleLoop
        parentWidth={width - 30}
        resizeMethod={'resize'}
        resizeMode={'stretch'}
        ImageComponentStyle={styles.image}
        imageLoadingColor='#E49012'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  image: {
    borderRadius: 15, 
    height: '100%', 
    width: '100%',
  },
});
