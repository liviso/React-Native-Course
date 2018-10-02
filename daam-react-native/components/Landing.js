import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export class Landing extends React.Component {


    render() {

        return (
            <View>

                <Text>
                    Dinner and a Movie
                </Text>
                <Text>
                    Film Details...

                </Text>


                {this.props.films.map(film => (
                    <View>
                        <Text>Title: {film.title}</Text>
                        <Text>TagName: {film.tagline}</Text>
                        <Image source={{ uri: `http://localhost:5000/${film.poster_path}` }} style={styles.container} />
                    </View>

                ))}


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50

    },
});