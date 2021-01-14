import { userContext } from '../../App.js';
import { TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export class LeftScreen extends React.Component {
    //currently only displays user info. Customize here!

    constructor(props) {
        super(props);
        // gives us access to the navigation tool, so we can switch screens
        // if you want to switch to a new screen, use the command this.navigation.navigate("screenname")
        this.navigation = props.navigation;
        // saves the user data that was passed in by the App when it opened this
        this.user = props.user;
        this.state = {
            title: '',
            page:''
        };
        this.submit = this.submit.bind(this);
    }

 submit (title, page) {
    firebase.database()
    .ref("/users")
    .child(firebase.auth().currentUser.uid)
    .child('/left')
    .child(title)
    .set({
        pageLeft: page
    });
    this.setState({
        title: '',
        page:''
    })
    alert('The information has been sent!');
 }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://wallpaperaccess.com/full/2862101.jpg' }}
                    >
                <View style={styles.row}>
                <Text style={styles.title}>
                    BookSN
                </Text>         
                <TouchableHighlight
                    onPress={this.goHome}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Home Page
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.goProfile}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Profile
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.goAdd}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Add a book
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.goSearch}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Search for books/review
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.goLeft}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Report Left Book
                        </Text>
                    </View>
                </TouchableHighlight>

                </View>
                <TextInput
                    placeholder='Title'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ title: text })}
                    value={this.state.title}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Page where it was left'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ page: text })}
                    value={this.state.page}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableHighlight
                    onPress={() => this.submit(this.state.title, this.state.page)}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Submit
                        </Text>
                    </View>
                </TouchableHighlight>
                </ImageBackground>
                </View>
                )}
  goHome = (e) => {
    this.navigation.navigate('Home')
    }
  goProfile = (e) => {
    this.navigation.navigate('Profile')
    }
  goAdd = (e) => {
    this.navigation.navigate('Add')
    }
  goSearch = (e) => {
    this.navigation.navigate('Search')
    }
  goRecommend = (e) => {
    this.navigation.navigate('Recommend')
    }
  goLeft = (e) => {
    this.navigation.navigate('Left')
    }
            
            }