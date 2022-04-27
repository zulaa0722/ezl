import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import ChildLists from "./ChildLists";

const ParentItem = (props) => {
  const [showChild, setShowChild] = useState(false);

  const clickParentItem = () => {
    setShowChild(!showChild);
  };

  return (
    <>
      <TouchableOpacity style={styles.parentItem} onPress={clickParentItem}>
        <AntDesign
          name={showChild ? "caretdown" : "caretright"}
          size={20}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.text} key={props.item.id}>
          {props.item.titleName}
        </Text>
      </TouchableOpacity>
      {showChild && (
        <ChildLists clickChild={props.clickChild} id={props.item.id} />
      )}
    </>
  );
};

export default ParentItem;

const styles = StyleSheet.create({
  parentItem: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "#2869e0",
    marginBottom: 10,
    alignItems: "center",
  },
  icon: {
    paddingTop: 5,
    marginRight: 10,
    marginLeft: 5,
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
