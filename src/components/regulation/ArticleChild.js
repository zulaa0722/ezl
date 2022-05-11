import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ArticleChild = (props) => {
  const navigateReading = (id) => {
    props.navigateTo(id);
  };
  return (
    <>
      {props.areYouHaveChild && (
        <TouchableOpacity
          onPress={() => {
            navigateReading(props.data.item.id);
          }}
          style={styles.btnStyleElse}
        >
          <View style={styles.wrapperElse}>
            <Text style={styles.text}>
              {props.data.item.articleName} {props.data.item.parentID}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ArticleChild;

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
