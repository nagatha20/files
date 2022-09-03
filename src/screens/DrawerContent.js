import React, {useEffect, useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {mainColor} from '../utils/GlobalStyles';

export function DrawerContent(props) {
  const logout = () => {
    Alert.alert('WARNING!', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => props.navigation.navigate('Home')},
      {
        text: 'Confirm',
        onPress: async () => {
          await AsyncStorage.clear();
          props.navigation.navigate('Login');
        },
      },
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Welcome Abeine!</Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="search" color={color} size={size} />
              )}
              label="Search Results"
              onPress={() => {
                props.navigation.navigate('Search Results');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                // <Icon name="user" color={color} size={size} />

                <FontAwesome5 name="search" color={color} size={size} />
              )}
              label="Search Result"
              onPress={() => {
                props.navigation.navigate('Search Result');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="send" color={color} size={size} />

                //   <FontAwesome5 name={'send'} color={color} size={size} />
              )}
              label="Send Quote"
              onPress={() => {
                props.navigation.navigate('Send Quote');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="hospital" color={color} size={size} />
              )}
              label="Hospitals Registered"
              onPress={() => {
                props.navigation.navigate('Hospitals Registered');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="quote-left" color={color} size={size} />
              )}
              label="Quotes"
              onPress={() => {
                props.navigation.navigate('Quotes');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="hospital" color={color} size={size} />
              )}
              label="Register Hospital"
              onPress={() => {
                props.navigation.navigate('Register Hospital');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="exit-to-app" color={color} size={size} />
              )}
              label="Logout"
              onPress={logout}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <FontAwesome5 name={'user-circle'} color={color} size={size} />
          )}
          label="My Account"
          onPress={() => props.navigation.navigate('Profile')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 26,
    marginTop: 3,
    color: mainColor,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
