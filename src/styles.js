import React from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth
    },
  title: { 
        fontSize: 80, // Parameter, sets the size of letters 
        fontFamily:'futura', // Sets font
        color: 'white' // Sets color
  },
  row: {
      flexDirection: 'row', // Sets if the elements inside this component will be arranged in a row or in a column
      width: deviceWidth, // Sets width of component in relation to the user's screen size
      height: deviceHeight/10, // Sets height of component in relation to the user's screen size
      justifyContent: 'center', // Sets all elements inside to be vertically centered
      textAlign: 'center', // Aligns the text to the center of the component
      alignItems: 'center', // Sets all elements inside to be horizontally centered
      marginTop: 10 // Creates a margin for the element as a whole
  },
  text: {
        fontSize: 20,
        marginTop: 10, // Creates a margin from the top of the text to the bottom of the element above
        marginBottom: 10, // Creates a margin from the bottom of the text to the bottom of the element below
        marginLeft: 30, // Creates a margin from the element to the left
        marginRight: 30, //Creates a margin from the element to the right
        paddingLeft: 16 // Creates space from all sides between this element and those surrounding it
  },
  secondButton: {
      height: deviceHeight/10, 
      width: deviceWidth/10,
      backgroundColor: 'gray', // Color of the buttom
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 4, // Curves the corners of the button
      borderColor: 'gray', // Color of the border
      borderWidth: 2, // Size of the border
      margin: 4,
},
buttonText: {
    fontSize: 16,
    fontWeight: "bold", // Bolds the text
    fontFamily: 'futura'
},
    textInput: {
        height: deviceHeight/18,
        width: deviceWidth*9/10,
        borderRadius: 5,
        fontSize: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    textInput3: {
        height: deviceHeight/20,
        width: deviceWidth*8/10,
        borderRadius: 5,
        fontSize: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: deviceHeight/20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonText2: {
        fontSize: 16,
        marginRight: 10,
        fontFamily: 'futura',
        color: 'white'
    },
    footerView: {
        alignItems: "center",
        marginTop: 20,
        paddingTop: 20,
        borderTopColor: "black",
        borderTopWidth: 1
    },
    footerText: {
        fontSize: 16,
        color: 'white'
    },
    footerText2: {
      fontSize: 16,
      color: 'black'
  },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    column: {
        flexDirection: 'column',
        width: deviceWidth/2,
        height: deviceHeight*9/10,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    secondButton3: {
      height: deviceHeight/9, 
      width: deviceWidth/9,
      backgroundColor: 'gray',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'gray',
      borderWidth: 2,
      margin: 8
  },
    container2: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        margin: 100
    },
    container3: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'column',
        height: deviceHeight*7/10,
        width: deviceWidth
    },
    centerText: {
        fontSize: 30,
        fontFamily: 'timesnewroman',
        color: 'white'
    },
    profileText: {
        fontSize: 20,
        fontFamily: 'timesnewroman',
        color: 'white'
    },
    row2: {
        flexDirection: 'row',
        height: deviceHeight*9/10,
        width: deviceWidth
    },
    row3: {
        flexDirection: 'row',
    },
    textInput2: {
        borderWidth: 1,
        borderColor: '#afafaf',
        width: '80%',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 20,
        fontSize: 20,
      },
      todoItem: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
      },
      todoText: {
        borderColor: '#afafaf',
        paddingHorizontal: 5,
        paddingVertical: 7,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        minWidth: '50%',
        textAlign: 'center',
      },
      searchBoxAnswer: {
        backgroundColor: 'white',
        height: deviceHeight/7,
        width: deviceWidth*9/10,
        borderWidth: 10,
        borderColor: 'black',
        flexDirection: 'row',
        margin: 10
      },
      resultDivide1: {
        marginLeft: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      },
      resultDivide2: {
        flexDirection: 'row',
        marginLeft: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      background: {
        height: deviceHeight,
        width: deviceWidth
      },
      resultText: {
        fontSize: deviceHeight/12,
        fontFamily: 'curiernew'
      },
      resultButton: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        margin: 10,
        height: deviceHeight/10,
        width: deviceWidth/10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 5
      },
      resultButtonText: {
        fontSize: 20,
        fontFamily: 'futura'
      },
      detailsBox: {
        backgroundColor: 'white',
        height: deviceHeight*6/10,
        width: deviceWidth*6/10,
        marginLeft: deviceWidth*2/10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      },
      detailsText: {
        fontSize: deviceHeight/20,
        fontFamily: 'timesnewroman',
        marginTop: 5
      },
      container4: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center'
      },
      column2: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: deviceHeight,
        width: deviceWidth
      },
      column3: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: deviceHeight*8/10,
        width: deviceWidth
      }
});