import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    textInput: {
        height: 48,
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
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },

    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        paddingTop: 20,
        borderTopColor: "black",
        borderTopWidth: 1
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
});