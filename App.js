// This is the entry point of your app

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from './src/firebase_config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Import any new screens you make here
import { HomeScreen } from './src/screens/HomeScreen.js';
import { LoginScreen } from './src/screens/LoginScreen.js';
import { RegistrationScreen } from './src/screens/RegistrationScreen.js';
import { LoadingScreen } from './src/screens/LoadingScreen.js';

// cretes a component that makes navigation between screens prettier
const Stack = createStackNavigator();

export default class App extends React.Component {

  //user and loading are variables that change what screens are displayed - they
  // are stored in the components state

  constructor(props) {
    super(props); //required in every React Native class constructor
    this.state = {
      user: null,
      loading: true
    }
    this.listenForUserChange(); //sets a rule to change the state when logging in / out
  }

  render() {
    // when the program first loads, the "loading" screen will appear
    // it will stay up forever if, say, Firebase never responds
    if (this.state.loading) {
      return <LoadingScreen />
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.state.user == null ? (
            // if there is no user, load the Login and Registration screens
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          ) : (
              // if there is a user, load the regular screens, starting with Home.
              // this one looks different because we have to pass the user
              // data to the home screen. You can add more screens here by copying this.
              <Stack.Screen name="Home">
                {props => <HomeScreen {...props} user={this.state.user} />}
              </Stack.Screen>
            )
          }
        </Stack.Navigator>
      </NavigationContainer >
    )
  }

  listenForUserChange() {
    // this is a link to the database /users list
    const usersRef = firebase.database().ref('/users');

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        //logged out, this will take us back to login/registration
        this.setState({ user: null, loading: false })
        return;
      }
      usersRef
        .child(user.uid) // get the user with our user id
        .once('value') // pull down its value from the database
        .then((data) => { //once it has arrived...
          const userData = data.val(); // save its value
          if (userData) {
            this.setState({ user: userData, loading: false })
          } else {
            // weird case where the user exists but is not in the database - probably a bug, but worth
            // a quick fix 
            console.log("Authorized user with no database entry - creating a basic data entry for you")
            const userData2 = { id: user.uid, email: user.email, fullName: "" };
            usersRef.child(user.uid).set(userData2); // this adds the user with a blank name to the database
            this.setState({ user: userData2, loading: false })
          }
        })
    });

  }
}


