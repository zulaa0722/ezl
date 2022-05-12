import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import ArticleChild from "./ArticleChild";

const ArticleChildren = (props) => {
  // const [isEqual, setIsEqual] = useState(false);
  if (props.getClickParentID == props.data.item.parentID) {
    props.hiddenSubChildren(props.data.item.parentID);
    // setIsEqual(true);
  }

  return (
    <>
      {props.getClickParentID == props.data.item.parentID && (
        <ArticleChild
          navigateTo={props.navigateTo}
          data={props.data}
          areYouHaveChild={props.areYouHaveChild}
        />
      )}
    </>
  );
};

export default ArticleChildren;

const styles = StyleSheet.create({
  btnStyleElse: {
    marginTop: 5,
  },
  wrapperElse: {
    //flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 40,
    marginHorizontal: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    margin: 10,
    // width: "90%",
    borderRadius: 5,
    // backgroundColor: "#fff",
  },
});
