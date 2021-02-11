import { userContext } from '../../App.js';
import { TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export class HomeScreen extends React.Component {
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
                <View style={styles.container2}>
                <Text style={styles.centerText}>
                    Welcome users! This program is designed for that small population in the modern world that<br />
                    likes to read. This is meant to be a tool for those who wish to learn and be transported to<br />
                    a magical world with the use of words and writing. It is meant to inspire and to encourage reading in modern society.<br />
                    Have fun. Read.
                </Text>
                <TouchableHighlight
                    onPress={this.goRecommend}
                >
                    <View style={styles.secondButton3}>
                        <Text style={styles.buttonText}>
                        Get a recommendation
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>
                <TouchableHighlight
                        onPress={this.onLogoutPress}
                    >
                        <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Not you?&nbsp;
                        <Text style={styles.footerLink}>
                            Sign out
                        </Text>
                    </Text>
                </View>
                    </TouchableHighlight>
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
    goRecommend = (e) => {
        this.navigation.navigate('Recommend')
      }
    goLeft = (e) => {
        this.navigation.navigate('Left')
      }
    // Logout function
    onLogoutPress() {
        firebase
            .auth()
            .signOut();
    }
}