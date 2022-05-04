import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ParentLists from "../../../components/militaryRule/militaryRule/ParentLists";

const ShowTitlesScreen = (props) => {
  const clickChild = (id) => {
    console.log("show pdf " + id);

    props.navigation.navigate("ShowPdfScreen", {
      id: id,
    });
  };

  return (
    <View>
      <ParentLists clickChild={clickChild} />
    </View>
  );
};

export default ShowTitlesScreen;

const styles = StyleSheet.create({});
