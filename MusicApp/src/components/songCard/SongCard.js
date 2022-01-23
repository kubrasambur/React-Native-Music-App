import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';


function SongCard(props) {
    return (
        <View style={styles.container}>

            <Image source={{ uri: props.song.imageUrl }} style={styles.image} />

            <View style={styles.inner_container}>

                <Text style={styles.title}>{props.song.title}</Text>

                <View style={styles.content_container}>

                    <View style={styles.info_container}>
                        <Text>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>

                    {props.song.isSoldOut &&
                        <View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>Tükendi</Text>
                        </View>
                    }


                </View>
                <View style={styles.album_container}>
                    <Text style={styles.album_title}>{props.song.album}</Text>
                </View>

            </View>

        </View>
    );
}
export default SongCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black"
    },
    info_container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    year: {
        marginLeft:10,
        color: "gray",
        fontWeight: "bold",
        fontSize: 12
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: "red",
        padding: 4,
        borderRadius: 5
    },
    soldout_title: {
        color: "red",
        fontSize: 12
    },
    content_container: {
        flexDirection: "row",

    },
    album_title: {
        fontWeight: "bold",
        fontSize:15,
        color:"#200B7A"
    }
});
