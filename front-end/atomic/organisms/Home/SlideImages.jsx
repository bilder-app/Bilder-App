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
        inactiveDotColor='rgba(50,50,50,0.5)'
        dotStyle={styles.dotStyle}
        parentWidth={width - 30}
        paginationBoxStyle={styles.paginationBoxStyle}
        resizeMethod={'resize'}
        resizeMode={'stretch'}
        imageLoadingColor='#E49012'
        style={styles.slider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  slider: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
    backgroundColor: '#EEEEEE',
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  paginationBoxStyle: {
    position: "absolute",
    bottom: -28,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  }
});
