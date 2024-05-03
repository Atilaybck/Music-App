import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import music_data from "./src/music-data.json";
import SongCard from "./src/components/SongCard/SongCard";
import SearchBar from "./src/components/SearchBar/SearchBar";

function App() {
  const [list, setList] = useState(music_data); 

  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeparator = () => <View style={styles.separator} />;

  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list} // list durumu kullanıldı
        keyExtractor={(item) => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
});
