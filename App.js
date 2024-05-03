import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import music_data from "./src/music-data.json";
import SongCard from "./src/components/SongCard/SongCard";

function App() {

  const renderSong  =({ item }) => <SongCard  song ={item}/>


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={music_data}
          keyExtractor={(item) => item.id}
          renderItem={renderSong}

        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})