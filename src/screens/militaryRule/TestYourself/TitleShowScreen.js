import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { selectTitles } from "../../../helpers/dbMilitaryRule";
const TitleShowScreen = (props) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    // setTitles(dbMilRule.selectTitles(props.route.params.chapterID));
    selectTitles(props.route.params.chapterID)
      .then((res) => {
        setTitles(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {});
  return (
    <View>
      <Text>TitleShowScreen {props.route.params.chapterID}</Text>
      <Text>hed bn ve {titles.length}</Text>
      {titles.map((el, index) => (
        <Text key={index}>{el.name}</Text>
      ))}
    </View>
  );
};

export default TitleShowScreen;

const styles = StyleSheet.create({});
