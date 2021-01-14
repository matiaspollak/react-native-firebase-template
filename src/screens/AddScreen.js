import { userContext } from '../../App.js';
import { TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"
import React from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, Switch } from 'react-native';
import Constants from 'expo-constants';


export class AddScreen extends React.Component {
    //currently only displays user info. Customize here!
constructor(props) {
        super(props);
        // gives us access to the navigation tool, so we can switch screens
        // if you want to switch to a new screen, use the command this.navigation.navigate("screenname")
        this.navigation = props.navigation;
        // saves the user data that was passed in by the App when it opened this
        this.user = props.user;
        this.route = props.route;
        this.state = {
            bookTitles: [],
            title: "",
            author: "",
            genre: "",
            pages: "", 
            rating: null,
            ratingTotal: null,
            plotRating: null,
            plotRatingTotal: null,
            age: null,
            difficulty: null,
            difficultyTotal: null,
            interest: null,
            interestTotal: null,
            notPages: null,
            finished: true,
            reviewCount: 1
          };
          this.addBook = this.addBook.bind(this);
}


addBook (title, author, genre, pages, rating, plotRating, age, difficulty, interest, notPages, finished) {
    if (!title) return;
    if (firebase.database().ref('/books').child(title) !== null) {
        alert('This book has already been added, you can choose to review it in the Search for books/review section.')
    }
    const newBook = firebase.database().ref().child("/books").push();
    const key = newBook.key;
    firebase
            .auth()
            newBook
            .catch(error => {
                alert(error)
            })
            .then(response => {
                if (!title) return;
                const titleName = {
                    title: title
                }
                const bookData = {
                    author: author,
                    genre: genre, 
                    pages: pages, 
                    rating: rating, 
                    ratingTotal: rating,
                    plotRating: plotRating, 
                    plotRatingTotal: plotRating,
                    age: age, 
                    difficulty: difficulty, 
                    difficultyTotal: difficulty,
                    interest: interest, 
                    interestTotal: interest,
                    notPages: notPages, 
                    finished: finished,
                    reviewCount: 1
                }
                firebase.database()
                    newBook.set(bookData);
                    
            })
            const query = firebase.database().ref('/books').orderByChild('age').equalTo(23);
            query.once( 'value', data => {
            data.forEach(userSnapshot => {
            let userKey = userSnapshot.key;

        firebase.database().ref('/books').child(title).update({
            author: author,
            genre: genre, 
            pages: pages, 
            rating: rating, 
            ratingTotal: rating,
            plotRating: plotRating, 
            plotRatingTotal: plotRating,
            age: age, 
            difficulty: difficulty, 
            difficultyTotal: difficulty,
            interest: interest, 
            interestTotal: interest,
            notPages: notPages, 
            finished: finished,
            reviewCount: 1
        }, () => this.setState({
            title: "",
            author: "",
            genre: "", 
            pages: "", 
            rating: "", 
            plotRating: "", 
            age: "", 
            difficulty: "", 
            interest: "", 
            notPages: ""
    })), (error) => {
          if (error) {
            console.log(error.message);
          }else{
            // Success
          }
        }
    });
    firebase.database().ref('/books').child(key).remove();
    alert(title + ' has been added!');
});;
};
      
    render () {
        return (
            <View style={styles.container}>
                <ImageBackground
                        style={styles.container}
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
                <TextInput
                    placeholder='Title'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ title: text })}
                    value={this.state.title}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onSubmitEditing = {this.addBook}
                />
                <TextInput
                    placeholder='Author'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ author: text })}
                    value={this.state.author}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Genre'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ genre: text })}
                    value={this.state.genre}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='# Pages'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ pages: text })}
                    value={this.state.pages}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Overall Rating (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ rating: text})}
                    value={this.state.rating}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Plot Rating (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ plotRating: text })}
                    value={this.state.plotRating}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Level of Interest (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ interest: text })}
                    value={this.state.interest}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Intended Age'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ age: text })}
                    value={this.state.age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Level of difficulty (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ difficulty: text })}
                    value={this.state.difficulty}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View style={styles.row3}>
                <Text style={styles.buttonText2}>
                    Click the button if you have not finished the book       
                </Text>
                <Switch
                    onValueChange={() => this.setState(state => ({
                        finished: !state.finished}))}
                    value={this.state.finished}
                />
                </View>
                <TextInput
                    placeholder='Page where the book was left (if the last button was clicked)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ notPages: text })}
                    value={this.state.notPages}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableHighlight
                    onPress={() => this.addBook(this.state.title, this.state.author, this.state.genre, this.state.pages,
                        parseInt(this.state.rating), parseInt(this.state.plotRating), parseInt(this.state.age), 
                        parseInt(this.state.difficulty), parseInt(this.state.interest), this.state.notPages, this.state.finished)}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                        Submit
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
}
          
