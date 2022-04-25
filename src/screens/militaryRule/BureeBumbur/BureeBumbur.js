import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const BureeBumbur = (props) => {
  const clickOnRow = (id, type, name) => {
    props.navigation.navigate("BureeBumberPlay", {
      id: id,
      type: type,
      name: name,
    });
  };
  return (
    <ScrollView style={styles.bodySide}>
      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(1, "Бүрээ", "Харуулд алхаад-МАРШ");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Харуулд алхаад-МАРШ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BureeBumbur;

const styles = StyleSheet.create({
  bodySide: {
    flex: 1,
    // padding: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  rowText: {
    color: "black",
    fontSize: 21,
    fontWeight: "bold",
  },
  listBtn: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
    height: 60,
    //marginBottom: 5,
    // borderRadius: 5,
    // backgroundColor: "green",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  image: {
    marginRight: 10,
    width: 70,
    height: 30,
    justifyContent: "center",
  },
});
