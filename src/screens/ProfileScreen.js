import { userContext } from '../../App.js';
import { TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export class ProfileScreen extends React.Component {
    //currently only displays user info. Customize here!

    constructor(props) {
        super(props);
        // gives us access to the navigation tool, so we can switch screens
        // if you want to switch to a new screen, use the command this.navigation.navigate("screenname")
        this.navigation = props.navigation;
        // saves the user data that was passed in by the App when it opened this
        this.user = props.user;
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
                </View>
                <View style={styles.row2}>
                <View style={styles.column}>
                <TouchableHighlight
                    onPress={this.goSearch}
                >
                <Image
                    source={{ uri: 'https://codehs.com/uploads/4701f3f1623febd7bf14890531037569' }}
                    style={{ height: 400, width: 400 }}
                />
                </TouchableHighlight>
                </View>
                <View style={styles.column}>
                <Text style={styles.profileText}>
                    User ID: {this.user.id}<br /> <br />
                    User name: {this.user.fullName}<br /> <br />
                    User email: {this.user.email}<br /> <br />
                    User Favorite Genre: {this.user.favoriteGenre}<br /> <br />
                    User Favorite Book: {this.user.favoriteBook}
                </Text>
                </View>
                </View>
                </ImageBackground>
            </View>
        )
    }
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
}