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
      name: 'Mbarara Heart Centre',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'mhc@gmail.com',
      desc: 'sample description but caan be long and actually too long',
      image: 'sample image',
    },
    {
      name: 'Mbarara Heart Centre',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'mhc@gmail.com',
      desc: 'sample description but caan be long and actually too long',
      image: 'sample image',
    },
    {
      name: 'Mbarara Heart Centre',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'mhc@gmail.com',
      desc: 'sample description but caan be long and actually too long',
      image: 'sample image',
    },
  ]);

  // useEffect(() => {
  //   const getHospitals = async () => {
  //     try {
  //       setIsFetching(true);
  //       const userToken = await AsyncStorage.getItem('token');
  //       const res = await axios.get(
  //         'https://plasmafinderapp.herokuapp.com/api/requests',
  //         {
  //           headers: {
  //             token: `Bearer ${userToken}`,
  //           },
  //         },
  //       );
  //       console.log(res.data);
  //       setDonorss(res.data);
  //       console.log(donorss.length);
  //       // setDonorss(search(res.data));
  //       setDonorss(res.data);
  //       setIsFetching(false);
  //     } catch (err) {
  //       console.log(err);
  //       setIsFetching(false);
  //     }
  //   };
  //   getHospital();
  // }, []);
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Search Result')}
              style={styles.details}>
              <View style={styles.left}>
                <View style={styles.item}>
                  <FontAwesome5 name={'hospital'} />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'map-marker'} />
                  <Text style={styles.text}>{item.location}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'image'} />
                  <Text style={styles.text}>{item.image}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'envelope'} />
                  <Text style={styles.text}>{item.email}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'audio-description'} />
                  <Text numberOfLines={1} style={styles.text}>
                    {item.desc}
                  </Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'phone'} />
                  <Text style={styles.text}>{item.tel}</Text>
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
