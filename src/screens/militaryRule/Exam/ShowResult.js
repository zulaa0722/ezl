import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const ShowResult = (props) => {
  const [percent, setPoint] = useState(0);

  useEffect(() => {}, []);
  return (
    <View>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            props.navigation.navigate("MilitaryHome");
          }}
        >
          <Text style={styles.backtxt}>Буцах</Text>
        </TouchableOpacity>
        <Text style={styles.line}> </Text>

        <Text style={styles.text}>ДҮН</Text>

        {/* </LinearGradient> */}
      </View>
      <Text style={styles.scoreTxt}>ТАНЫ ШАЛГАЛТЫН ДҮН :</Text>
      <Text style={styles.scoreTxt}>
        {(props.route.params.point * 100) / 25}%  /  100%
      </Text>
      <View style={styles.onRowView1}>
        <Text style={styles.scoreTrueTxtLable}>Зөв хариулсан:</Text>
        <Text style={styles.scoreTrueTxtScore}>{props.route.params.point}</Text>
      </View>
      <View style={styles.onRowView2}>
        <Text style={styles.scoreTrueTxtLable}>Буруу хариулсан:</Text>
        <Text style={styles.scoreTrueTxtScore}>
          {25 - props.route.params.point}
        </Text>
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
    marginLeft: -30,
  },
  rowText: {
    color: "black",
  },
  line: {
    width: 2,
    backgroundColor: "#fff",
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
    fontSize: 15,
    textAlign: "left",
    paddingRight: 5,
  },
  scoreTrueTxtScore: {
    flex: 1,
    color: "black",
    fontSize: 15,
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
