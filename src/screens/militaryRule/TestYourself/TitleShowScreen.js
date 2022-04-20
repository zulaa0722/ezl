import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const TitleShowScreen = (props) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {});
  return (
    <View>
      <Text>TitleShowScreen {props.route.params.chapterID}</Text>
    </View>
  );
};

export default TitleShowScreen;

const styles = StyleSheet.create({});
