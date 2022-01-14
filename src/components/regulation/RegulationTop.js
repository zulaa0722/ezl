import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const RegulationTop = (props) => {
  // console.log(props);
  return (
    <View>
      <TouchableOpacity
        style={listStyle.listsStyle}
        onPress={() => {
          props.setIDS(props.ids);
        }}
      >
        {/* <View> */}
        <Text style={listStyle.text}>{props.names}</Text>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default RegulationTop;

const listStyle = StyleSheet.create({
  listsStyle: {
    marginHorizontal: 30,
    marginVertical: 15,
    backgroundColor: "#03203C",
    borderRadius: 40,
    padding: 10,
    width: 200,
    height: "80%",
  },
  text: {
    // flex: 1,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#03203C",
    width: "80%",
    marginHorizontal: "10%",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
