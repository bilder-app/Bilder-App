import React from 'react'
import { Image, Dimensions, ScrollView, View } from 'react-native';

const url = 'https://c8.alamy.com/comp/2D4MCPB/tools-background-horizontal-isolated-vector-objects-instuments-carpenter-home-master-handyman-repair-of-premises-buildings-2D4MCPB.jpg'
const { width } = Dimensions.get('window');

const styles = {
  scroll: {
    backgroundColor: '#7f7',
    height: 120,
    paddingVertical: 10,
    paddingLeft: 15,
  },
  image: {
    width: width - 45,
    height: '100%',  
    resizeMode: 'cover',
    borderRadius: 15,
    marginLeft: 0,
    marginRight: 15,
  },
}

export default function Slider() {



  return(
    <ScrollView 
      pagingEnabled 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.scroll}
      decelerationRate={0.6}
      snapToInterval={width - 30}
    >
      {[1,2,3,4,5].map((item, index) => {
        return(
          <Image 
            key={index}
            source={{ uri: url }}
            style={styles.image}
          />
        )
      })}
    </ScrollView>
  )
}