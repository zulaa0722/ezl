import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HtmlMyData = (props) => {
  const regex = /<br|\n|\r\s*\\?>/g;
  return (
    <div ref={props.ref}>
      <Text>{props.data.trim().replace(regex, "")}</Text>
    </div>
  );
};

export default HtmlMyData;

const styles = StyleSheet.create({});
