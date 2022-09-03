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

export default function Quote({navigation}) {
  const onPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://media.gettyimages.com/photos/mother-and-daughter-at-the-pediatric-office-picture-id1266645987?k=20&m=1266645987&s=612x612&w=0&h=Xbkp4jm0yFIl2fhSwjA872_5TDzAZrC2b-C5aCXvPSM=',
        }}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <View style={styles.mainWrapper}>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Enter your fullname" />
            {/* <FontAwesome5 name={'user'} size={20} color={'black'} /> */}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter location e.g Mbarara Kakoba"
            />
            {/* <FontAwesome5 name={'user'} size={20} color={'black'} /> */}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your age e.g 25"
            />
            {/* <FontAwesome5 name={'phone'} size={20} color={'black'} /> */}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Enter your email" />
            {/* <FontAwesome5 name={'envelope'} size={20} color={'black'} /> */}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Enter message body" />
            {/* <FontAwesome5 name={'user'} size={20} color={'black'} /> */}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your contact number"
            />
            {/* <FontAwesome5 name={'user'} size={20} color={'black'} /> */}
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
