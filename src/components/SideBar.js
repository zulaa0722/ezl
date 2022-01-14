import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import DrawerNavigatorItems from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function (props) {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/images/header.png")}
        style={{ width: undefined, padding: 10, paddingTop: 20 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 200 }}>Batzul</Text>
      </ImageBackground>
      <View>
        <Text>asdfss</Text>
      </View>
    </ScrollView>
  );
}
