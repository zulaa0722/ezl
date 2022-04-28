import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ShowResult from "./ShowResult";

const ShowQuestion = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [userAns, setUserAns] = useState(false);
  const [trueAns, setTrueAns] = useState(false);
  const [ansDiscription, setAnsDiscription] = useState(false);

  // const [ans4, setans4] = useState(null);

  const ansBtnFn = (ans, true_answer, discription) => {
    setShowResult(true);
    setUserAns(ans);
    setTrueAns(true_answer);
    setAnsDiscription(discription);
  };
  // console.log(props.item.ans4);

  // setans4(props.item.ans4);

  // const ansBtnFn = (ans, true_answer) => {};
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
        onPress={() => {
          ansBtnFn(
            props.item.ans1,
            props.item.true_answer,
            props.item.true_answer
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
          ansBtnFn(
            props.item.ans2,
            props.item.true_answer,
            props.item.true_answer
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans2}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
          ansBtnFn(
            props.item.ans3,
            props.item.true_answer,
            props.item.true_answer
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans3}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
          ansBtnFn(
            props.item.ans4,
            props.item.true_answer,
            props.item.true_answer
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans4}</Text>
      </TouchableOpacity>

      {showResult && (
        <ShowResult
          ansDiscription={ansDiscription}
          userAns={userAns}
          trueAns={trueAns}
        />
      )}
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
