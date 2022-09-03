import {View, StyleSheet, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {mainColor} from '../utils/GlobalStyles';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <View>
        <Image style={styles.image} source={require('../images/logo.png')} />
        {/* <Text>Logo Here</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  image: {
    width: 200,
    height: 200,
  },
});
