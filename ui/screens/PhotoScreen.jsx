import React from 'react'
import { SafeAreaView, StyleSheet, Image} from 'react-native'

const PhotoScreen = ({route}) => {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Image source={{uri:`${route.params.photo}`}} style={styles.photo}/>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    photo:{
        flex:1,
        resizeMode:'contain'
    }
  });

export default PhotoScreen