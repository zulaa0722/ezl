import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";

const ShowQuestion = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [userAns, setUserAns] = useState(false);
  const [trueAns, setTrueAns] = useState(false);
  const [ansDiscription, setAnsDiscription] = useState(false);
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const [checkBtnData, setCheckBtnData] = useState("");
  const [checkBtnData1, setCheckBtnData1] = useState("");

  useEffect(()=>{
    setCheckBtnData(props.item.ans4);
  }, []);

  useEffect(()=>{
    setCheckBtnData1(props.item.ans3);
  }, []);

  const ansBtnFn = (ans, true_answer, discription) => {
    setShowResult(true);
    setUserAns(ans);
    setTrueAns(true_answer);
    setAnsDiscription(discription);
  };

  return (
    <View key={props.item.id} style={styles.slide}>
      {/* <Text>{pageNumber.count}</Text> */}
      <View style={styles.questionsStyle}>
        <Text style={styles.questionsText}>Асуулт {props.pageNumber}/{props.niitID} - "{props.item.question}"</Text>
      </View>

      <TouchableOpacity
        style={changeColor1 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(true);
          setChangeColor2(false);
          setChangeColor3(false);
          setChangeColor4(false);
          ansBtnFn(
            props.item.ans1,
            props.item.true_answer,
            props.item.true_answer,
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={changeColor2 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(false);
          setChangeColor2(true);
          setChangeColor3(false);
          setChangeColor4(false);
          ansBtnFn(
            props.item.ans2,
            props.item.true_answer,
            props.item.true_answer
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans2}</Text>
      </TouchableOpacity>

        {checkBtnData1 == "" ? <></> : (
          <TouchableOpacity
          style={changeColor3 ? styles.ansBtnSelected : styles.ansBtn}
          onPress={() => {
            setChangeColor1(false);
            setChangeColor2(false);
            setChangeColor3(true);
            setChangeColor4(false);
            ansBtnFn(
              props.item.ans3,
              props.item.true_answer,
              props.item.true_answer
            );
          }}
        >
          <Text style={styles.ansText}>{props.item.ans3}</Text>
        </TouchableOpacity>
        )}
      
        
        {checkBtnData == "" ? <></> : (
          <TouchableOpacity
        style={changeColor4 ? styles.ansBtnSelected : styles.ansBtn}
        onPress={() => {
          setChangeColor1(false);
          setChangeColor2(false);
          setChangeColor3(false);
          setChangeColor4(true);
          ansBtnFn(
            props.item.ans4,
            props.item.true_answer,
            props.item.true_answer
          );
        }}
      >
        <Text style={styles.ansText}>{props.item.ans4}</Text>
      </TouchableOpacity>
        )}
      

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
    backgroundColor: "#DDF3E8",
    overflow: "hidden",
    
  },
  pageNumberStyle: {
    color: "red",
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
    backgroundColor: "#1E9C28",
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
  questionsStyle: {
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  questionsText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },
});
