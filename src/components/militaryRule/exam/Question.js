import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Question = (props) => {
  const ansBtnFn = (ans, true_answer, discription) => {};
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const changeBackground = () => {};
  console.log("----------");
  console.log(props.item);
  return (
    <View key={props.item.id} style={styles.slide}>
      <View style={styles.questionsStyle}>
        <Text style={styles.questionsText}>{props.item.question}</Text>
      </View>

      <TouchableOpacity
        style={changeColor1 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(true);
          setChangeColor2(false);
          setChangeColor3(false);
          setChangeColor4(false);
          props.clickAnswer(
            props.item.id,
            props.item.ans1,
            props.item.true_answer
          );
        }}
      >
        <Text style={changeColor1 ? styles.ansTextSelected : styles.ansText}>
          {props.item.ans1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={changeColor2 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(false);
          setChangeColor2(true);
          setChangeColor3(false);
          setChangeColor4(false);
          props.clickAnswer(
            props.item.id,
            props.item.ans2,
            props.item.true_answer
          );
        }}
      >
        <Text style={changeColor2 ? styles.ansTextSelected : styles.ansText}>
          {props.item.ans2}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={changeColor3 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(false);
          setChangeColor2(false);
          setChangeColor3(true);
          setChangeColor4(false);
          props.clickAnswer(
            props.item.id,
            props.item.ans3,
            props.item.true_answer
          );
        }}
      >
        <Text style={changeColor3 ? styles.ansTextSelected : styles.ansText}>
          {props.item.ans3}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={changeColor4 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(false);
          setChangeColor2(false);
          setChangeColor3(false);
          setChangeColor4(true);
          props.clickAnswer(
            props.item.id,
            props.item.ans4,
            props.item.true_answer
          );
        }}
      >
        <Text style={changeColor4 ? styles.ansTextSelected : styles.ansText}>
          {props.item.ans4}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;

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

  ansBtnSelected: {
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff012",
    borderColor: "green",
    borderWidth: 1,
  },
  ansText: {
    color: "#fff",
    fontSize: 13,
  },
  ansTextSelected: {
    color: "#000000",
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
