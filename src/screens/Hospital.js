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

export default function Hospital() {
  const onPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://media.gettyimages.com/photos/female-doctor-uses-tablet-to-show-xray-to-senior-man-picture-id1204436253?k=20&m=1204436253&s=612x612&w=0&h=T0wTwfmk--BRBCc7iTexAqg0ePHunuSbsuV3WZnMGDc=',
        }}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <View style={styles.mainWrapper}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter hospital/clinic name"
            />
            <FontAwesome5 name={'user'} size={20} color={'black'} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Enter location" />
            <FontAwesome5 name={'user'} size={20} color={'black'} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter hospital contact"
            />
            <FontAwesome5 name={'phone'} size={20} color={'black'} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter hospital email"
            />
            <FontAwesome5 name={'envelope'} size={20} color={'black'} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter hospital description"
            />
            <FontAwesome5 name={'user'} size={20} color={'black'} />
          </View>

          <MainButton title="Submit" onPress={onPress} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainWrapper: {
    width: '95%',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 120,
    height: 120,
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
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
