import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from '../styles';

export class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props)
        // this information is passed in by the navigator screen
        // and allows us to use this class to switch screens
        this.navigation = props.navigation;
        this.state = {
            email: "",
            password: "",
            favoriteGenre: "",
            favoriteBook: ""
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Full name'
                    onChangeText={(text) => this.setState({ fullName: text })}
                    value={this.state.fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Favorite Genre'
                    onChangeText={(text) => this.setState({ favoriteGenre: text })}
                    value={this.state.favoriteGenre}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Favorite Book'
                    onChangeText={(text) => this.setState({ favoriteBook: text })}
                    value={this.state.favoriteBook}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onRegisterPress()}>
                    Register
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Have an account?&nbsp;
                    <Text style={styles.footerLink} onPress={() => this.onFooterLinkPress()}>
                            Log in!
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }

    onFooterLinkPress() {
        this.navigation.navigate('Login')
    }

    onRegisterPress() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                alert(error)
            })
            .then(response => {
                if (!response.user) return;
                const userData = {
                    id: response.user.uid,
                    email: this.state.email,
                    fullName: this.state.fullName,
                    favoriteGenre: this.state.favoriteGenre,
                    favoriteBook: this.state.favoriteBook,
                }
                firebase.database()
                    .ref("/users")
                    .child(response.user.uid)
                    .set(userData);
            });

    }
}