import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const TitleShowScreen = (props) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {});
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {/* <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={home_styles.btnGradient}
            > */}
        {/* <Image
            style={home_styles.image}
            source={require("../../assets/images/law05.png")}
          /> */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // props.navigation.navigate("regulationHome");
          }}
        >
          <Text>Буцах</Text>
        </TouchableOpacity>
        <Text style={styles.line}> </Text>
        <Text style={styles.text}>
          Батлан хамгаалах, Зэвсэгт хүчний тухай хуулиуд
        </Text>
        {/* </LinearGradient> */}
      </View>
      <View style={styles.bodySide}>
        <Text>TitleShowScreen {props.route.params.chapterID}</Text>
      </View>
    </View>
  );
};

export default TitleShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // alignItems: "center",
    //flexDirection: "row",
    // backgroundColor: "orange",
  },

  backButton: {
    backgroundColor: "#00aeef",
    padding: 10,
    height: 40,
    //borderRadius: 5,
    // borderTopRightRadius: 20,
    // flex: 1,
  },
  headerRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: "100%",
    // marginBottom: "5%",
    // marginRight: 20,
    // marginLeft: 20,
    // borderRadius: 15,
    borderColor: "#fff",
    backgroundColor: "green",
    // flex: 1,
    // borderWidth: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    // paddingRight: 10,
    flex: 1,
    color: "#fff",
  },
  line: {
    width: 1,
    backgroundColor: "#fff",
    // backgroundColor: "#f0c418",
    marginRight: 3,
    height: "100%",
  },
  bodySide: {
    flex: 1,
    backgroundColor: "#51E1ED",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    overflow: "hidden",
  },
});
