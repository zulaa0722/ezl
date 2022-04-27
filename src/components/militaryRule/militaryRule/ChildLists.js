import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { selectTitles } from "../../../helpers/dbMilitaryRule";

import ChildItem from "./ChildItem";

const ChildLists = (props) => {
  const [childLists, setChildLists] = useState([]);

  useEffect(() => {
    if (childLists.length == 0) {
      selectTitles(props.id)
        .then((res) => {
          console.log(res._array);
          setChildLists(res._array);
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      {childLists.map((el) => (
        <ChildItem clickChild={props.clickChild} key={el.id} item={el} />
      ))}
    </ScrollView>
  );
};

export default ChildLists;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});
