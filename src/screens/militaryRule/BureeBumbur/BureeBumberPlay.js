import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import SliderSound from "./SliderSound";

const BureeBumberPlay = (props) => {
  return (
    <View style={styles.bodyStyle}>
      <View style={styles.headerRow}>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.line}> </Text>

        <Text style={styles.text}> {props.route.params.type}</Text>

        {/* </LinearGradient> */}
      </View>
      <Text style={styles.headerTxt}>{props.route.params.name}</Text>
      <View style={styles.imgBck}>
        <Image
          style={styles.imageStyleShuu}
          source={songTitleLists[props.route.params.id - 1].image}
        />
        <SliderSound id={props.route.params.id} />
      </View>
    </View>
  );
};

export default BureeBumberPlay;

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: "center",
  },
  headerRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    width: "100%",
    backgroundColor: "green",
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    color: "#fff",
    padding: 2,
  },
  rowText: {
    color: "black",
  },
  line: {
    width: 1,
    backgroundColor: "#fff",
    // backgroundColor: "#f0c418",
    marginRight: 3,
    height: "100%",
  },
  image: {
    marginRight: 10,
    marginLeft: 5,
    width: 70,
    height: 30,
    justifyContent: "center",
  },
  imgBck: {
    flex: 1,
    width: "100%",
  },
  imageStyleShuu: {
    // flex: 1,
    width: "100%",
    height: "70%",
  },
  headerTxt: {
    textAlign: "center",
    fontSize: 18,
    padding: 5,
    fontWeight: "bold",
  },
  listBtn: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
    height: 60,
    backgroundColor: "green",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  playButtonContainer: {
    backgroundColor: "#FFF",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    shadowColor: "#5D3F6A",
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});

const songTitleLists = [
  {
    id: 1,
    image: require("../../../../assets/images/raw/e_neg.png"),
  },
  {
    id: 2,
    image: require("../../../../assets/images/raw/e_hoer.png"),
  },
  {
    id: 3,
    image: require("../../../../assets/images/raw/e_gurav.png"),
  },
  {
    id: 4,
    image: require("../../../../assets/images/raw/e_duruv.png"),
  },
  {
    id: 5,
    image: require("../../../../assets/images/raw/e_tav.png"),
  },
  {
    id: 6,
    image: require("../../../../assets/images/raw/e_zurgaa.png"),
  },
  {
    id: 7,
    image: require("../../../../assets/images/raw/e_zurgaa.png"),
  },
  {
    id: 8,
    image: require("../../../../assets/images/raw/e_naim.png"),
  },
  {
    id: 9,
    image: require("../../../../assets/images/raw/e_ec.png"),
  },
  {
    id: 10,
    image: require("../../../../assets/images/raw/e_arav.png"),
  },
  {
    id: 11,
    image: require("../../../../assets/images/raw/e_arvanneg.png"),
  },
  {
    id: 12,
    image: require("../../../../assets/images/raw/e_arvanhoer.png"),
  },
  {
    id: 13,
    image: require("../../../../assets/images/raw/b_neg.png"),
  },
  {
    id: 14,
    image: require("../../../../assets/images/raw/b_hoer.png"),
  },
  {
    id: 15,
    image: require("../../../../assets/images/raw/b_gurav.png"),
  },
  {
    id: 16,
    image: require("../../../../assets/images/raw/b_duruv.png"),
  },
  {
    id: 17,
    image: require("../../../../assets/images/raw/b_tav.png"),
  },
];
