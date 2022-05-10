import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Swiper from "react-native-swiper";
import Question from "./Question";
import { useFocusEffect } from "@react-navigation/native";

const QuestionsShow = (props) => {
  useEffect(() => {
    console.log(props.questions);
  }, [props.questions]);
  return (
    <View>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}
        nextButton={true}
        prevButton={true}
        showsPagination={false}
      >
        {props.questions.map((el, index) => (
          <Question key={el.id} item={el}  />
        ))}
      </Swiper>
    </View>
  );
};

export default QuestionsShow;

const styles = StyleSheet.create({
  wrapper: {},
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
