import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ShowResult = (props) => {
  return (
    <View>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // props.navigation.navigate("regulationHome");
          }}
        >
          <Text style={styles.backtxt}>Буцах</Text>
        </TouchableOpacity>
        <Text style={styles.line}> </Text>

        <Text style={styles.text}> ДҮН</Text>

        {/* </LinearGradient> */}
      </View>
      <Text style={styles.scoreTxt}>ТАНЫ ШАЛГАЛТЫН ДҮН /хувиар/:</Text>
      <Text style={styles.scoreTxt}>{props.route.params.point} %</Text>
      <View style={styles.onRowView1}>
        <Text style={styles.scoreTrueTxtLable}>Зөв хариулсан:</Text>
        <Text style={styles.scoreTrueTxtScore}>25</Text>
      </View>
      <View style={styles.onRowView2}>
        <Text style={styles.scoreTrueTxtLable}>Буруу хариулсан:</Text>
        <Text style={styles.scoreTrueTxtScore}>25</Text>
      </View>
    </View>
  );
};

export default ShowResult;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#00aeef",
    padding: 15,
    height: 45,
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
    fontSize: 16,
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
  scoreTxt: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  scoreTrueTxtLable: {
    color: "black",
    fontSize: 14,
    textAlign: "left",
    paddingRight: 5,
  },
  scoreTrueTxtScore: {
    flex: 1,
    color: "black",
    fontSize: 14,
    textAlign: "right",
    paddingRight: 5,
  },
  onRowView1: {
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    borderTopColor: "grey",
    borderTopWidth: 2,
    padding: 5,
    marginTop: 5,
    paddingLeft: 10,
  },
  onRowView2: {
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    borderTopColor: "grey",
    padding: 5,
    paddingLeft: 10,
  },
  backtxt: {
    color: "black",
    textAlign: "center",
    fontSize: 14,
    alignItems: "center",
  },
});