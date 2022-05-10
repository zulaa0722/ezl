import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowResult = (props) => {
  return (
    <View >
      {props.userAns === props.trueAns ? (
        <Text
          style={styles.trueAnsReplay}
        >
          Зөв хариуллаа.
        </Text>
      ) : (
        <>
          <Text
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            Буруу хариуллаа.
          </Text>
          <View
            style={{
              padding: 5,
              borderRadius: 5,
              borderColor: "grey",
              borderWidth: 1,
              padding: 5,
            }}
          >
            <Text style={{ color: "green", fontWeight: "bold" }}>
              Зөв хариулт бол :
            </Text>
            <Text> {props.ansDiscription}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ShowResult;

const styles = StyleSheet.create({
  trueAnsReplay: {
    color: "green", 
    textAlign: "center", 
    fontWeight: "bold",
    paddingTop: 5,
  },
});