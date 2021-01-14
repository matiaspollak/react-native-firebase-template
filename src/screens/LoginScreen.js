import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles.js"

export class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.route = props.route;
    this.navigation = props.navigation;
    this.state = {
      email: "",
      password: ""
    }
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='E-mail'
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          style={styles.textInput}
          placeholder='Password'
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onLoginPress}>
          Log in
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText2}>
            Don't have an account?&nbsp;
              <Text style={styles.footerLink} onPress={this.onFooterLinkPress}>
              Sign up
              </Text>
          </Text>
        </View>
      </View>
    )
  }

  onFooterLinkPress = (e) => {
    this.navigation.navigate('Registration')
  }

  onLoginPress = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        alert(error)
      })
  }

}