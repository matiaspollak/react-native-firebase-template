import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from "../styles"

export class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container4}>
                <Image
                    source={{ uri: 'https://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif/@@images/image.gif' }}
                    style={{ height: 200, width: 200 }}
                />
            </View>
        )
    }
}