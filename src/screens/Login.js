import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {mainColor} from '../utils/GlobalStyles';
import MainButton from '../utils/MainButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Login({navigation}) {
  const onPress = () => {
    navigation.navigate('Home Screens');
  };

  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://image.winudf.com/v2/image1/Y29tLkFsRmFqckRldmVsb3Blci5CbHVlLldhbGxwYXBlcl9zY3JlZW5fMTBfMTU2MDcyMzcyNV8wNjk/screen-7.jpg?fakeurl=1&type=.webp',
        }}>
        {/* source={require('../images/backg.jpg')}> */}
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <View style={styles.mainWrapper}>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="jane@gmail.com" />
            <FontAwesome5 name={'envelope'} size={20} color={'black'} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="********" />
            <FontAwesome5 name={'lock'} size={20} color={'black'} />
          </View>
          <MainButton title="Sign In" onPress={onPress} />
          <View style={styles.passwordReset}>
            <TouchableOpacity>
              <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newUser}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                  {' '}
                  Create New
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    // opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainWrapper: {
    width: '95%',
    // backgroundColor: mainColor,
    marginHorizontal: 10,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputWrapper: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: '95%',
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 25,
  },
  input: {
    fontSize: 17,
  },
  passwordReset: {
    alignItems: 'center',
    marginTop: 10,
  },
  newUser: {
    alignItems: 'flex-start',
    marginTop: 70,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
