import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import {TextInput} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {mainColor} from '../utils/GlobalStyles';

export default function Home() {
  return (
    <View style={styles.body}>
      <Title style={styles.title}>Medical Search Engine</Title>
      <View style={styles.searchWrapper}>
        <FontAwesome5
          name="search"
          style={{marginHorizontal: 15}}
          color={'gray'}
          size={20}
        />
        <TextInput placeholder="Type here..." style={styles.input} />
      </View>
      <View style={styles.mainRecWrapper}>
        <TouchableOpacity style={styles.recWrapper}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <Text style={{color: mainColor, margin: 7}}>MHC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recWrapper}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <Text style={{color: mainColor, margin: 7}}>MHC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recWrapper}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <Text style={{color: mainColor, margin: 7}}>MHC</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainRecWrapper}>
        <TouchableOpacity style={styles.recWrapper}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <Text style={{color: mainColor, margin: 7}}>MHC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recWrapper}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <Text style={{color: mainColor, margin: 7}}>MHC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recWrapper}>
          <Image style={styles.image} source={require('../images/logo.png')} />
          <Text style={{color: mainColor, margin: 7}}>MHC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: mainColor,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '95%',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 25,
  },
  input: {
    fontSize: 17,
  },
  mainRecWrapper: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  recWrapper: {},
  image: {
    width: 60,
    height: 60,
  },
});
