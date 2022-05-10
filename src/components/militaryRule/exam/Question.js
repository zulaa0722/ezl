import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const Question = (props) => {
  const ansBtnFn = (ans, true_answer, discription) => {};
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const changeBackground = () => {};
  const [checkBtnData2, setCheckBtnData2] = useState("");
  const [checkBtnData3, setCheckBtnData3] = useState("");

  useEffect(()=>{
    setCheckBtnData2(props.item.ans3);
  }, []);

  useEffect(()=>{
    setCheckBtnData3(props.item.ans4);
  }, []);


  return (
    <View key={props.item.id} style={styles.slide}>
      <View style={styles.questionsStyle}>
        <Text style={styles.questionsText}>Асуулт {props.pageNumber}/25 - "{props.item.question}"</Text>
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

      {checkBtnData2 == "" ? <></> : (
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
      )}
      
      {checkBtnData3 == "" ? <></> : (
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
      )}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding: 5,
    backgroundColor: "#DDF3E8",
    overflow: "hidden",
  },
  quesText: {
    color: "#fff",
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
    backgroundColor: "#00aeef",
  },
  ansText: {
    color: "#fff",
    fontSize: 13,
  },
  ansTextSelected: {
    color: "#fff",
    fontSize: 13,
  },
  questionsStyle: {
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  questionsText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },
});
