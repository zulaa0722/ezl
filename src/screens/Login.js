import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function (props) {
  return (
    <View style={home_styles.container}>
      <Text style={home_styles.text}>Эрх зүй</Text>
    </View>
  );
}
const home_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  img: {
    width: "100%",
    height: "50%",
  },
});
