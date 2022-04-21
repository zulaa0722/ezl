import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ShowResult from "./ShowResult";

const ShowQuestion = (props) => {
  const [checkAns, setCheckAns] = useState(false);
  const ansBtnFn = (ans, true_answer) => {
    if (ans === true_answer) {
      setCheckAns(true);
      //   console.log(this.state.checkAns);
    } else {
      setCheckAns(false);
    }
  };
  return (
    // <View>
    //   <Text>{props.item.ans1} dfbdfb</Text>
    // </View>
    <View key={props.item.id} style={styles.slide}>
      <View style={styles.questionsStyle}>
        <Text style={styles.questionsText}>{props.item.question}</Text>
      </View>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={ansBtnFn(props.item.ans1, props.item.true_answer)}
      >
        <Text style={styles.ansText}>{props.item.ans1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
          //   ansBtnFn(props.item.ans2, props.item.true_answer);
        }}
      >
        <Text style={styles.ansText}>{props.item.ans2}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
          //   ansBtnFn(props.item.ans3, props.item.true_answer);
        }}
      >
        <Text style={styles.ansText}>{props.item.ans3}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
          //   ansBtnFn(props.item.ans4, props.item.true_answer);
        }}
      >
        <Text style={styles.ansText}>{props.item.ans4}</Text>
      </TouchableOpacity>

      {/* {checkAns == true && <ShowResult />}
      <ShowResult /> */}
    </View>
  );
};

export default ShowQuestion;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  quesText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
  },
  ansBtn: {
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "green",
  },
  ansText: {
    color: "#fff",
    fontSize: 13,
  },
  questionsStyle: {
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 2,
    padding: 5,
    marginBottom: 5,
  },
  questionsText: {
    color: "black",
    fontSize: 13,
  },
});
