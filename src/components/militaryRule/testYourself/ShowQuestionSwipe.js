import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ShowQuestionSwipe = (props) => {
  const [checkAns, setCheckAns] = useState(false);

  
  return (
    <View key={props.item.id} style={styles.slide}>
      
      <View style={styles.questionsStyle}>
        <Text style={styles.questionsText}>{props.item.question}</Text>
      </View>

      <TouchableOpacity style={styles.ansBtn}>
        <Text style={styles.ansText}>{props.item.ans1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ansBtn}
        onPress={() => {
           // ansBtnFn(props.item.ans2, props.item.true_answer);
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
        
    </View>
  );
};

export default ShowQuestionSwipe;

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
