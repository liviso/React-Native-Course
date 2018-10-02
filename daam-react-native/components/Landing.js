import React from 'react';
import { Text, View, Image, StyleSheet , ScrollView} from 'react-native';
import {FilmBrief} from './FilmBrief'

export class Landing extends React.Component {


    render() {

        return (
            <View style={styles.container}>

                

               <ScrollView>
          
               <Text>
                    Dinner and a Movie
                </Text>
                <Text>
                    Film Details...

                </Text>
                {this.props.films.map(film => (
                   <FilmBrief film={film} key={film.id} />
                 

                ))}
               
</ScrollView> 

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        top:50
    },
});

