import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowResult = (props) => {
  return (
    <View>
      <Text>ShowResult: {props.route.params.point}</Text>
    </View>
  );
};

export default ShowResult;

const styles = StyleSheet.create({});
