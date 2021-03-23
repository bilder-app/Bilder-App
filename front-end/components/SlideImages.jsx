import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-web-swiper';



export default function SlideImages() {

    var arrayImg = ['../img/2.png','../img/3.png','../img/4.png']
    return (
        <View style={styles.container}>
          <Swiper>
            <View style={[styles.slideContainer,styles.slide1]}>
            <Image
          style={styles.image}
          source={require('../img/2.png')}
        />
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
              <Text>Slide 2</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 250,
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide1: {
        backgroundColor: 'rgba(20,20,200,0.3)',
        borderRadius: 20,
        
    },
    slide2: {
      backgroundColor: 'rgba(20,200,20,0.3)',
    },
    slide3: {
      backgroundColor: 'rgba(200,20,20,0.3)',
    },
    containerImg: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }, 
    image: {
      flex: 1,
      resizeMode: 'contain',
      width: '100%',
      height:'100%',
      
    }
    });