// SongCard.style.js

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 27,
    },
    info_container: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
    },
    year: {
        fontSize: 12,
        marginLeft: 10,
        color: "gray",
        fontWeight: "bold",
    },
    soldout_container:{
        borderWidth:1,
        borderColor:"#d90429",
        padding: 5,
        borderRadius:5,
    },
    content_container:{
        flexDirection: "row",
    },
    soldout_title:{
        color: "#d90429",
        fontSize:12
    }
});
