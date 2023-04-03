import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableHighlight,
} from 'react-native';

const ListScreen = ({navigation:{navigate}}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
    )
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {list.map(item => {
          return (
            <View style={styles.row}>
              <TouchableHighlight onPress={()=>navigate('Photo', {photo:item.urls.full})}>
                <Image
                  style={styles.img}
                  source={{uri: `${item.urls.small}`}}
                />
              </TouchableHighlight>
              <View style={styles.wrapperIn}>
                <Text style={styles.width}>{item.alt_description}</Text>
                <Text style={styles.name}>{item.user.name}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
  wrapperIn: {
    marginStart: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  width: {
    width: '60%',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ListScreen;
