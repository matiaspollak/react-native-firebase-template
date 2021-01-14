import { userContext } from '../../App.js';
import { TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { database } from 'firebase';

export class SearchScreen extends React.Component {
    //currently only displays user info. Customize here!

    constructor(props) {
        super(props);
        // gives us access to the navigation tool, so we can switch screens
        // if you want to switch to a new screen, use the command this.navigation.navigate("screenname")
        this.navigation = props.navigation;
        // saves the user data that was passed in by the App when it opened this
        this.user = props.user;
        this.state = {
            initial: 'block',
            searchBox: 'none',
            details: 'none',
            review: 'none',
            search: "",
            interest: "",
            difficulty: "",
            rating: "",
            plotRating: "",
            author: "",
            genre: "",
            pages: "", 
            age: "",
        };
        this.searchBook = this.searchBook.bind(this);
        this.details = this.details.bind(this);
        this.review = this.review.bind(this);
        this.submitReview = this.submitReview.bind(this);
        this.accessAuthor = this.accessAuthor.bind(this); 
        this.accessInterest = this.accessInterest.bind(this);
        this.accessDifficulty = this.accessDifficulty.bind(this); 
        this.accessRating = this.accessRating.bind(this);
        this.accessPlotRating = this.accessPlotRating.bind(this); 
        this.accessGenre = this.accessGenre.bind(this);
        this.accessPages = this.accessPages.bind(this); 
        this.accessAge = this.accessAge.bind(this);


    };
    accessAuthor (search) {
        firebase.database().ref('/books').child(search).child('/author').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                author: data
                }));
        }})};
    accessInterest (search) {
        firebase.database().ref('/books').child(search).child('/interest').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                interest: data
                }));
        }})
    };
    accessDifficulty (search) {
        firebase.database().ref('/books').child(search).child('/difficulty').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                difficulty: data
                }));
        }})
    };
    accessRating (search) {
        firebase.database().ref('/books').child(search).child('/rating').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                rating: data
                }));
        }})
    };
    accessPlotRating (search) {
        firebase.database().ref('/books').child(search).child('/plotRating').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                plotRating: data
                }));
        }})
    };
    accessGenre (search) {
        firebase.database().ref('/books').child(search).child('/genre').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                genre: data
                }));
        }})
    };
    accessPages (search) {
        firebase.database().ref('/books').child(search).child('/pages').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                pages: data
                }));
        }})
    };
    accessAge (search) {
        firebase.database().ref('/books').child(search).child('/age').once('value').then(snapshot => { 
            const data = snapshot.val()
            if (!data) {
                alert('Jarvis: something is wrong');
                return;
            } else {
                this.setState(state => ({
                age: data
                }));
        }})
    };
    

    submitReview(search, interest, difficulty, rating, plotRating) {
    
        firebase
                .database()
                .ref('/books')
                .child(search)
                .child('/reviewCount')
                .once('value')
                .then(snapshot => {
                    const number = parseFloat(snapshot.val());
                    const action = number + 1;
                    firebase
                            .database()
                            .ref('/books')
                            .child(search)
                            .update({reviewCount: action})

                            firebase
                                    .database()
                                    .ref('/books')
                                    .child(search)
                                    .child('/interestTotal')
                                    .once('value')
                                    .then(snapshot => {
                                        const interestNum = parseFloat(snapshot.val());
                                        const interestAction = (interestNum + difficulty);
                                        const interestAction2 = (interestNum + interest)/action;
                                        firebase
                                                .database()
                                                .ref('/books')
                                                .child(search)
                                                .update({interestTotal: interestAction, 
                                                    interest: interestAction2})
                            }),
                            firebase
                                    .database()
                                    .ref('/books')
                                    .child(search)
                                    .child('/ratingTotal')
                                    .once('value')
                                    .then(snapshot => {
                                        const ratingNum = parseFloat(snapshot.val());
                                        const ratingAction = (ratingNum + difficulty);
                                        const ratingAction2 = (ratingNum + rating)/action;
                                        firebase
                                                .database()
                                                .ref('/books')
                                                .child(search)
                                                .update({ratingTotal: ratingAction,
                                                     rating: ratingAction2})
                            }),
                            firebase
                                    .database()
                                    .ref('/books')
                                    .child(search)
                                    .child('/plotRatingTotal')
                                    .once('value')
                                    .then(snapshot => {
                                        const plotNum = parseFloat(snapshot.val());
                                        const plotAction = (plotNum + difficulty);
                                        const plotAction2 = (plotNum + plotRating)/action;
                                        firebase
                                                .database()
                                                .ref('/books')
                                                .child(search)
                                                .update({plotRatingTotal: plotAction,
                                                    plotRating: plotAction2})
                            }),
                            firebase
                                    .database()
                                    .ref('/books')
                                    .child(search)
                                    .child('/difficultyTotal')
                                    .once('value')
                                    .then(snapshot => {
                                        const difficultyNum = parseFloat(snapshot.val());
                                        const difficultyAction = (difficultyNum + difficulty);
                                        const difficultyAction2 = (difficultyNum + difficulty)/action;
                                        firebase
                                                .database()
                                                .ref('/books')
                                                .child(search)
                                                .update({difficultyTotal: difficultyAction,
                                                    difficulty: difficultyAction2})
                                                 }
                                                
                                                 , () => this.setState(state =>({
                                                    rating: "", 
                                                    plotRating: "", 
                                                    difficulty: "", 
                                                    interest: ""
                                    })))
                                                alert(search + ' has been reviewed.')
                            
        })}; 
    details = () => this.setState(state => ({
            initial: 'none',
            searchBox: 'none',
            details: 'block',
            review: 'none'
    }));
    review = () => this.setState(state => ({
            initial: 'none',
            searchBox: 'none',
            details: 'none',
            review: 'block',
            search: this.state.search
    }));
searchBook (search) {
    firebase.database().ref('/books').child(search).once('value').then(snapshot => { 
        if (snapshot.val() === null ) {
    alert('This book has not been added to the database, feel free to add it in the "Add a book" section');
    this.setState(state => ({
        initial: 'block',
        searchBox: 'none',
        details: 'none',
        review: 'none'
}));
    } else {
        this.setState(state => ({
            initial: 'none',
            searchBox: 'block',
            details: 'none',
            review: 'none'
    }));  
}
})};
    render() {
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
                
                <View style={styles.row}>
                <TextInput
                    placeholder='Search'
                    style={styles.textInput3}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ search: text })}
                    value={this.state.search}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableHighlight
                    onPress={() => this.searchBook(this.state.search)}
                >
                    <View style={styles.secondButton}>
                        <Text style={styles.buttonText}>
                            Search
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>
                <View style = {{ display: this.state.searchBox }} >
                    <View style={styles.container3}>
                        <View style={styles.searchBoxAnswer}>
                                <View style={styles.resultDivide1}>
                                    <Text style={styles.resultText}>
                                        {this.state.search}
                                    </Text> 
                                </View>
                                    <View style={styles.resultDivide2}>
                                    <TouchableHighlight
                                        //onPress={this.details}
                                        onPress={() => {this.details(); this.accessAuthor(this.state.search); this.accessInterest(this.state.search);
                                            this.accessDifficulty(this.state.search); this.accessRating(this.state.search); 
                                            this.accessPlotRating(this.state.search); this.accessGenre(this.state.search); 
                                            this.accessPages(this.state.search); this.accessAge(this.state.search)}}
                                    >
                                    <View style={styles.resultButton}>
                                        <Text style={styles.resultButtonText}>
                                        Details
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={this.review}
                                    >
                                        <View style={styles.resultButton}>
                                            <Text style={styles.resultButtonText}>
                                            Review
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                    </View>
                        </View> 
                    </View> 
                </View>
                <View style = {{ display: this.state.details }} >
                    <View style={styles.detailsBox} >
                        <Text style={styles.detailsText} >
                        Title: {this.state.search} <br />
                        Author: {this.state.author} <br />
                        Intended Age: {this.state.age} <br />
                        Genre: {this.state.genre} <br />
                        Number of Pages: {this.state.pages} <br />
                        Rating: {this.state.rating} <br />
                        Plot Rating: {this.state.plotRating} <br />
                        Level of Interest: {this.state.interest} <br />
                        Level of Difficulty: {this.state.difficulty}
                        </Text>
                    </View>
                </View>
                <View style = {{ display: this.state.review }} >
                    <TextInput
                        placeholder='Overall Rating (1-5)'
                        style={styles.textInput}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => this.setState({ rating: text })}
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
                        placeholder='Level of difficulty (1-5)'
                        style={styles.textInput}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => this.setState({ difficulty: text })}
                        value={this.state.difficulty}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableHighlight
                        onPress={() => this.submitReview(this.state.search, parseFloat(this.state.interest), parseFloat(this.state.difficulty), parseFloat(this.state.rating), parseFloat(this.state.plotRating))}
                    >
                        <View style={styles.secondButton}>
                            <Text style={styles.buttonText}>
                                Submit
                            </Text>
                        </View>
                </TouchableHighlight>
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