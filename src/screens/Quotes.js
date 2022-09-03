import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Hospitals({navigation}) {
  const [isFetching, setIsFetching] = useState(false);

  const [query, setQuery] = useState('');

  const [hospitals, setHospitals] = useState([
    {
      fullname: 'Nuwahereza Dianah',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'dianah@gmail.com',
      age: 22,
      qbody: 'sample description but caan be long and actually too long',
    },
    {
      fullname: 'Nuwahereza Dianah',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'dianah@gmail.com',
      age: 22,
      qbody: 'sample description but caan be long and actually too long',
    },
    {
      fullname: 'Nuwahereza Dianah',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'dianah@gmail.com',
      age: 22,
      qbody: 'sample description but caan be long and actually too long',
    },
    {
      fullname: 'Nuwahereza Dianah',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'dianah@gmail.com',
      age: 22,
      qbody: 'sample description but caan be long and actually too long',
    },
  ]);

  return (
    <View style={styles.body}>
      {isFetching ? (
        <ActivityIndicator style={{marginTop: 20}} />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={hospitals}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.details}>
              <View style={styles.left}>
                <View style={styles.item}>
                  <FontAwesome5 name={'user'} />
                  <Text style={styles.text}>{item.fullname}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'map-marker'} />
                  <Text style={styles.text}>{item.location}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'phone'} />
                  <Text style={styles.text}>{item.tel}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'envelope'} />
                  <Text style={styles.text}>{item.email}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'audio-description'} />
                  <Text style={styles.text}>{item.qbody}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'user-circle'} />
                  <Text style={styles.text}>{item.age}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 15,
  },
  input: {
    flex: 10,
  },
  details: {
    width: '100%',
    padding: 10,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    marginLeft: 10,
  },
  left: {
    flex: 10,
  },
  right: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
