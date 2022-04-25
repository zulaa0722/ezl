import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowResult = (props) => {
  return (
    <View>
      {props.userAns === props.trueAns ? (
        <Text
          style={{ color: "green", textAlign: "center", fontWeight: "bold" }}
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
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>
              Зөв хариулт:
            </Text>
            <Text> {props.ansDiscription}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ShowResult;

const styles = StyleSheet.create({});
