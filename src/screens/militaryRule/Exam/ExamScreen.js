import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";

import ExamHeader from "../../../components/militaryRule/exam/ExamHeader";
import QuestionsShow from "../../../components/militaryRule/exam/QuestionsShow";
import Question from "../../../components/militaryRule/exam/Question";
import ShowQuestion from "../../../components/militaryRule/testYourself/ShowQuestion";
import { selectQuestions } from "../../../helpers/dbMilitaryRule";
import ShowResult from "./ShowResult";

let resultArr = [];
const ExamScreen = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log("dada");
    selectQuestions()
      .then((res) => {
        setQuestions(res._array);
        res._array.map((el) => {
          const rowEl = {
            id: el.id,
            userAns: null,
            trueAns: el.true_answer,
          };
          resultArr.push(rowEl);
        });
      })
      .catch((err) => {});
  }, []);

  const btnBackClick = () => {
    // props.navigation.navigate("MilitaryHome");
    var point = 0;
    for (var i = 0; i < resultArr.length; i++) {
      if (resultArr[i].trueAns === resultArr[i].userAns) {
        point++;
      }
    }
    resultArr = [];
    console.log(point);
    props.navigation.navigate("ShowResult", { point: point });
  };

  const clickAnswer = (qid, userAnswer, trueAnswer) => {
    for (var i = 0; i < resultArr.length; i++) {
      if (resultArr[i].id === qid) {
        resultArr[i].userAns = userAnswer;
      }
    }
  };

  return (
    <>
      <ExamHeader btnBackClick={btnBackClick} />
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}
        showsPagination={false}
      >
        {questions.map((el, index) => (
          <Question clickAnswer={clickAnswer} key={el.id} item={el} />
        ))}
      </Swiper>
    </>
  );
};

export default ExamScreen;

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1,
  },
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
  line: {
    width: 1,
    backgroundColor: "#fff",
    marginRight: 3,
    height: "100%",
  },

  slide: {
    // flex: 0.5,
    padding: 5,
    paddingTop: 20,
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
