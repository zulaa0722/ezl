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
    // marginHorizontal: 30,
    // marginVertical: 15,
    backgroundColor: "#03203C",
    borderRadius: 20,
    padding: 5,
    width: 320,
    height: "88%",
    margin: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    // flex: 1,
    padding: 5,
    textAlign: "center",
    // justifyContent: "center",
    // backgroundColor: "#03203C",
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
