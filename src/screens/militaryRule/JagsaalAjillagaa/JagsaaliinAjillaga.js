import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../../../assets/images/gif/bb1.gif"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../../../assets/images/gif/bb2.gif"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../../../assets/images/gif/bb3.gif"),
    backgroundColor: "#22bcb5",
  },
];

const JagsaaliinAjillaga = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {}, []);
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      loop={false}
      showsPagination={false}
    >
      {slides.map((el, index) => (
        // <ShowQuestion key={el.id} item={el} />
        <>
          <Text key={el.key} style={styles.titleTxt}>
            {el.title}
          </Text>
          <Image style={styles.image} source={el.image} />
        </>
      ))}
    </Swiper>
  );
};

export default JagsaaliinAjillaga;

const styles = StyleSheet.create({
  titleTxt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
