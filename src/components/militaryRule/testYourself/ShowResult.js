import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowResult = (props) => {
  return (
    <View>
      {props.userAns === props.trueAns ? (
        <Text>Зөв хариуллаа.</Text>
      ) : (
        <>
          <Text>Буруу хариуллаа.</Text>
          <Text>{props.ansDiscription}</Text>
        </>
      )}
    </View>
  );
};

export default ShowResult;

const styles = StyleSheet.create({});
