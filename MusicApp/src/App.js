import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import music_data from "./music-data.json"
import SongCard from './components/songCard/SongCard';
import SearchBar from './components/searchBar/SearchBar';

export default function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeparator = () => <View style={styles.separator} />
  const handleSearch = text => {
    const filteredlist = music_data.filter(song => {
      const searchedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()

      //searchedText currentTitle ın içinde varsa yani değeri -1 den büyükse döndürür
      return currentTitle.indexOf(searchedText) > -1
    })
    setList(filteredlist)
  }


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChange={handleSearch} />
      <FlatList keyExtractor={item => item.id}
        data={list}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderSong}></FlatList>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  separator: { borderWidth: 1, borderColor: "#e0e0e0" }
});
