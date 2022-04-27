import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import ParentItem from "./ParentItem";

const ParentLists = (props) => {
  return (
    <View>
      {parents.map((el) => (
        <ParentItem key={el.id} clickChild={props.clickChild} item={el} />
      ))}
    </View>
  );
};

export default ParentLists;

const styles = StyleSheet.create({});

const parents = [
  {
    id: 1,
    titleName: "Цэргийн дотоод албаны дүрэм",
  },
  {
    id: 2,
    titleName: "Цэргийн хүрээний ба харуулын албаны дүрэм",
  },
  {
    id: 3,
    titleName: "Цэргийн жагсаалын дүрэм",
  },
  {
    id: 4,
    titleName: "Цэргийн сахилгын дүрэм",
  },
];
