import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ExamHeader = (props) => {
  return (
    <View style={styles.headerRow}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          props.btnBackClick();
        }}>
        <Text>Дуусгах</Text>
      </TouchableOpacity>
      <Text style={styles.line}> </Text>
      <Text style={styles.text}>Шалгалтын хэсэг</Text>
    </View>
  );
};

export default ExamHeader;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#00aeef",
    padding: 15,
    height: 50,
  },
  headerRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    width: "100%",
    backgroundColor: "green",
  },
  line: {
    width: 2,
    backgroundColor: "#fff",
    marginRight: 3,
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    color: "#fff",
    padding: 2,
  },
});
