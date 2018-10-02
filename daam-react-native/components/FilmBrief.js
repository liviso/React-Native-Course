import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-material-cards'

export class FilmBrief extends React.Component {
    render() {
        return (

            <Card containerStyle={{ padding: 0.5 }}>
                <Image source={{ uri: `http://localhost:5000/${this.props.film.poster_path}` }} style={styles.container} />

                <Text>Title:: {this.props.film.title}</Text>
                <Text>TagName:: {this.props.film.tagline}</Text>

            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50

    },
});
