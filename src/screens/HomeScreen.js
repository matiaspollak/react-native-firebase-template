import { userContext } from '../../App.js';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"

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
                <Text style={styles.text}>
                    user ID: {this.user.id}<br />
                    user name: {this.user.fullName}<br />
                    user email: {this.user.email}
                </Text>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Not you?&nbsp;
                        <Text style={styles.footerLink} onPress={() => this.onLogoutPress}>
                            Sign out
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }

    // Logout function
    onLogoutPress() {
        firebase
            .auth()
            .signOut();
    }
}