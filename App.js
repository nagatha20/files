import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Quote from './src/screens/Quote';
import Hospital from './src/screens/Hospital';
import Home from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
import SearchResult from './src/screens/SearchResult';
import Quotes from './src/screens/Quotes';
import {mainColor} from './src/utils/GlobalStyles';
import {DrawerContent} from './src/screens/DrawerContent';
import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';
import Hospitals from './src/screens/Hospitals';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        component={Settings}
      />

      <Drawer.Screen
        name="Profile"
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        component={Profile}
      />
      <Drawer.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name="Search Results"
        component={SearchResults}
      />
      <Drawer.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name="Search Result"
        component={SearchResult}
      />
      <Drawer.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name="Send Quote"
        component={Quote}
      />
      <Drawer.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name="Quotes"
        component={Quotes}
      />
      <Drawer.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name="Register Hospital"
        component={Hospital}
      />
      <Drawer.Screen
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: mainColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },

          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
        name="Hospitals Registered"
        component={Hospitals}
      />
    </Drawer.Navigator>
  );
};

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="SplashScreen">
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home Screens"
          component={DrawerScreens}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
