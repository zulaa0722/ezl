import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: "./assets/1.jpg",
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: "./assets/2.jpg",
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: "./assets/3.jpg",
    backgroundColor: "#22bcb5",
  },
];

export default function Home() {
  const [showRealApp, setShowRealApp] = useState(false);
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    setShowRealApp = false;
  };

  if (showRealApp) {
    return <Home />;
  } else {
    return (
      <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
    );
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
