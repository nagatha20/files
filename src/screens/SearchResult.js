import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SearchResult() {
  const [isFetching, setIsFetching] = useState(false);

  const [query, setQuery] = useState('');

  const [quotes, setQuotes] = useState([
    {
      name: 'Mbarara Heart Centre',
      location: 'Mbarara Kiswahili',
      tel: '0776654235',
      email: 'mhc@gmail.com',
      desc: 'sample description but caan be long and actually too long',
      image: 'sample image',
    },
  ]);

  return (
    <View style={styles.body}>
      <Image
        style={styles.img}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
      {isFetching ? (
        <ActivityIndicator style={{marginTop: 20}} />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={quotes}
          renderItem={({item}) => (
            <View style={styles.details}>
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
                  <FontAwesome5 name={'envelope'} />
                  <Text style={styles.text}>{item.email}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'audio-description'} />
                  <Text style={styles.text}>{item.desc}</Text>
                </View>
                <View style={styles.item}>
                  <FontAwesome5 name={'phone'} />
                  <Text style={styles.text}>{item.tel}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '25%',
    marginBottom: 0,
  },
  input: {
    flex: 10,
  },
  details: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
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
