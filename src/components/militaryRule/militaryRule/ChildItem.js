import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ChildItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.clickChild(props.item.id);
      }}
    >
      <Text style={styles.text}>{props.item.name} </Text>
    </TouchableOpacity>
  );
};

export default ChildItem;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 15,
  },
});
