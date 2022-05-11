import { StyleSheet, Text, View, TouchableOpacity, pageNumber } from "react-native";
import React, { useEffect, useState } from "react";

import Swiper from "react-native-swiper";

import { selectQuestionsByDurem } from "../../../helpers/dbMilitaryRule";
import ShowQuestion from "../../../components/militaryRule/testYourself/ShowQuestion";

const ShowQuestionSwiper = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    selectQuestionsByDurem(props.route.params.bulegId)
      .then((res) => {
        // console.log(res._array);
        setQuestions(res._array);
        // console.log(res._array);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <View style={styles.headerRow}>
        <Text style={styles.text}>{props.route.params.chapterName}</Text>
      </View>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}
        nextButton={true}
        prevButton={true}
        showsPagination={false}
        
      >
        {questions.map((el, index) => (
          <ShowQuestion key={el.id} item={el} pageNumber={index+1} niitID={props.route.params.niitID}/>
        ))}
      </Swiper>
    </>
  );
};

export default ShowQuestionSwiper;

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
  pageNumber: {
    textAlign: "center",
    backgroundColor: "#00aeef",
  }
});
