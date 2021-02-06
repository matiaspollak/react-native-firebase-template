import { userContext } from '../../App.js';
import { TouchableOpacity } from 'react-native';
import { firebase } from "../firebase_config"
import styles from "../styles"
import React from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, Switch, FlatList } from 'react-native';
import Constants from 'expo-constants';


export class RecommendationScreen extends React.Component {
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
           ask: 'block',
           get: 'none',
           details: 'none',
           recommendations: [],
           genre: "",
           rating: "",
           age: "",
           plotRating: "",
           interest: "",
           difficulty: "",
           interest: "",
           author: "",
           pages: "", 
           title: ""
          };
          this.get = this.get.bind(this);
          this.details = this.details.bind(this);
          this.recommendation = this.recommendation.bind(this);
          this.accessAuthor = this.accessAuthor.bind(this); 
          this.accessInterest = this.accessInterest.bind(this);
          this.accessDifficulty = this.accessDifficulty.bind(this); 
          this.accessRating = this.accessRating.bind(this);
          this.accessPlotRating = this.accessPlotRating.bind(this); 
          this.accessGenre = this.accessGenre.bind(this);
          this.accessPages = this.accessPages.bind(this); 
          this.accessAge = this.accessAge.bind(this);
          this.accessTitle = this.accessTitle.bind(this);
            
}
componentDidMount () {
    firebase
            .database() 
            .ref()
            .child('/books') // References the 'books section in the database
            .once('value', snapshot => {
                const data = snapshot.val(); // Saves the book titles into a array variable 
                if (snapshot.val()) { // Checks if there are books
                            this.setState(state => ({
                                recommendations: Object.keys(data) /**  Sets the state of 'recommendations'   
                                                                        to an array that contains all 
                                                                        the book titles */
                            }));                                   
                }                                                  
        }) 
};
recommendation (genre, rating, age, plotRating, interest, difficulty, recommendations) {
for (let i = 0; i < recommendations.length; i++) { // Loops 'i' from 0 to the end of the array with book titles
    firebase
            .database()
            .ref('/books')
            .child(recommendations[i]) // References the database section for the first book in the array
            .child('/genre') // References the genre of that book
            .once('value') // If there is a value it will continue
            .then(snapshot =>{
        const genre1 = snapshot.val(); // Takes a snapshot of the value and sets that as the value of 'genre1'
        if (genre1 !== genre) { // If the book's genre doesn't match that required by the user 
            const list = recommendations;
            list.splice(i, 1); // Eliminates that book from the array
            this.setState(state => ({
                recommendations: list // Sets the state of 'recommendation' to the new array
            }));
        }
        for (let r = 0; r < recommendations.length; r++) {
            firebase.database().ref('/books').child(recommendations[r]).child('/rating').once('value').then(snapshot =>{
                const rating1 = snapshot.val();
                if (rating1 < rating) {
                    const list2 = recommendations;
                    list2.splice(r, 1);
                    this.setState(state => ({
                        recommendations: list2
                    }));
                }
                for (let a = 0; a < recommendations.length; a++) {
                    firebase.database().ref('/books').child(recommendations[a]).child('/age').once('value').then(snapshot =>{
                        const age1 = snapshot.val();
                        if (age1 > age) {
                            const list3 = recommendations;
                            list3.splice(a, 1);
                            this.setState(state => ({
                                recommendations: list3
                            }));
                        }
                        for (let b = 0; b < recommendations.length; b++) {
                            firebase.database().ref('/books').child(recommendations[b]).child('/plotRating').once('value').then(snapshot =>{
                                const plotRating1 = snapshot.val();
                                if (plotRating1 < plotRating) {
                                    const list4 = recommendations;
                                    list4.splice(b, 1);
                                    this.setState(state => ({
                                        recommendations: list4
                                    }));
                                }
                                for (let c = 0; c < recommendations.length; c++) {
                                    firebase.database().ref('/books').child(recommendations[c]).child('/interest').once('value').then(snapshot =>{
                                        const interest1 = snapshot.val();
                                        if (interest1 < interest) {
                                            const list5 = recommendations;                                            
                                            list5.splice(c, 1);
                                            this.setState(state => ({
                                                recommendations: list5
                                            }));
                                        }
                                        for (let d = 0; d < recommendations.length; d++) {
                                            firebase.database().ref('/books').child(recommendations[d]).child('/difficulty').once('value').then(snapshot =>{
                                                const difficulty1 = snapshot.val();
                                                if (difficulty1 > difficulty) {
                                                    const list6 = recommendations;
                                                    list6.splice(d, 1);
                                                    this.setState(state => ({
                                                        recommendations: list6
                                                    }));
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
} 
};
accessAuthor (search) {
    firebase.database().ref('/books').child(search).child('/author').once('value').then(snapshot => { 
        const data = snapshot.val()
        if (!data) {
            alert('Seems like you were asking for too much and there is mo book in the database that matches your description, maybe try retyping your preferences.');
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
            return;
        } else {
            this.setState(state => ({
            age: data
            }));
    }})
};
accessTitle (search) {
    firebase.database().ref('/books').once('value').then(snapshot => { 
        const data = snapshot.val()
        if (!data) {
            return;
        } else {
            const cut = Object.keys(data);
            for (let i = 0; i < cut.length; i++) {
                if (cut[i] !== search) {
                    cut.splice(i, 1)
                }
            }
            this.setState(state => ({
            title: cut[0]
            }));
    }})
};

get = () => this.setState(state => ({
    get: 'block',
    ask: 'none',
    details: 'none'
}));

details = () => this.setState(state => ({
    get: 'none',
    ask: 'none',
    details: 'block'
}));

render () {
    return (
        <View style={styles.container}>
            <ImageBackground
                    style={styles.container}
                    source={{ uri: 'https://wallpaperaccess.com/full/2862101.jpg' }}
                >
            <View style = {{ display: this.state.ask }} >
            <View style={styles.column2} >
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
                    placeholder='Maximum Intended Age'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ age: text })}
                    value={this.state.age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Minimum Rating (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ rating: text })}
                    value={this.state.rating}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Minimum Plot Rating (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ plotRating: text })}
                    value={this.state.plotRating}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Maximum Difficulty (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ difficulty: text })}
                    value={this.state.difficulty}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Minimum Level of Interest (1-5)'
                    style={styles.textInput}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => this.setState({ interest: text })}
                    value={this.state.interest}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableHighlight
                    onPress={() => {this.get(); this.recommendation(this.state.genre, parseFloat(this.state.rating), 
                        parseFloat(this.state.age), parseFloat(this.state.plotRating), 
                        parseFloat(this.state.interest), parseFloat(this.state.difficulty), this.state.recommendations)}}
                >
                    <View style={styles.secondButton3}>
                        <Text style={styles.buttonText}>
                        Get recommendation
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>
                </View>
                <View style = {{ display: this.state.get }} >
                    <FlatList data={this.state.recommendations}
                    renderItem={({item}) => 
                        <View style={styles.searchBoxAnswer}>
                            <View style={styles.resultDivide1}>
                                <Text style={styles.resultText}>
                                    {item}
                                </Text> 
                            </View>
                            <View style={styles.resultDivide2}>
                                <TouchableHighlight
                                    onPress={() => { this.details(); this.accessAuthor(item); this.accessInterest(item);
                                        this.accessDifficulty(item); this.accessRating(item); 
                                        this.accessPlotRating(item); this.accessGenre(item); 
                                        this.accessPages(item); this.accessAge(item); this.accessTitle(item)}}
                                >
                                    <View style={styles.resultButton}>
                                        <Text style={styles.resultButtonText}>
                                        Details
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                }
                    />
                </View>
                <View style = {{ display: this.state.details }} >
                        <View style={styles.column3}>
                            <View style={styles.detailsBox} >
                                <Text style={styles.detailsText} >
                                    Title: {this.state.title} <br />
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
                <TouchableHighlight
                    onPress={this.goHome}
                >
                    <View style={styles.secondButton3}>
                        <Text style={styles.buttonText}>
                        Done
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>
                    </ImageBackground>
                    </View>
    )}
    goHome = (e) => {
        this.navigation.navigate('Home')
      }
}