import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
const slides = [
  {
    key: 1,
    title: "Жагсаалын үндсэн зогсолт",
    image: require("../../../../assets/images/gif/pic0.gif"),
  },
  {
    key: 2,
    title: '"БОЛНО" командаар зогсох байдал ',
    image: require("../../../../assets/images/gif/pic1.gif"),
  },
  {
    key: 3,
    title: "Малгай авсан байдал",
    image: require("../../../../assets/images/gif/pic2.gif"),
  },
  {
    key: 4,
    title: "Жагсаалын алхаагаар алхах байдал",
    image: require("../../../../assets/images/gif/pic3.gif"),
  },
  {
    key: 5,
    title: "Дороо алхах байдал",
    image: require("../../../../assets/images/gif/pic4.gif"),
  },
  {
    key: 6,
    title: "Зэвсэгтэй жагсаалын үндсэн зогсолт           (Ар талаас)",
    image: require("../../../../assets/images/gif/pic5.gif"),
  },
  {
    key: 7,
    title: "Зэвсэгтэй үед хөл салгаж зогсох байдал",
    image: require("../../../../assets/images/gif/pic6.gif"),
  },
  {
    key: 8,
    title: 'Автоматыг "Оосорт" байдлаас "Цээжинд" авах ажиллагаа',
    image: require("../../../../assets/images/gif/pic7.gif"),
  },
  {
    key: 9,
    title: 'Автоматыг "Цээжинд" байдлаас "Оосорт" авах ажиллагаа',
    image: require("../../../../assets/images/gif/pic8.gif"),
  },
  {
    key: 10,
    title: "Бууг нуруунд авсан байдал",
    image: require("../../../../assets/images/gif/pic9.gif"),
  },
  {
    key: 11,
    title: 'Автоматыг "Оосорт" байдлаас гарт авах',
    image: require("../../../../assets/images/gif/pic10.gif"),
  },
  {
    key: 12,
    title: "",
    image: require("../../../../assets/images/gif/pic11.gif"),
  },
  {
    key: 13,
    title: "",
    image: require("../../../../assets/images/gif/pic12.gif"),
  },
  {
    key: 14,
    title: "",
    image: require("../../../../assets/images/gif/pic13.gif"),
  },
  {
    key: 15,
    title: "",
    image: require("../../../../assets/images/gif/pic14.gif"),
  },
  {
    key: 16,
    title: "",
    image: require("../../../../assets/images/gif/pic15.gif"),
  },
  {
    key: 17,
    title: "",
    image: require("../../../../assets/images/gif/pic16.gif"),
  },
  {
    key: 18,
    title: "",
    image: require("../../../../assets/images/gif/pic17.gif"),
  },
  {
    key: 19,
    title: "",
    image: require("../../../../assets/images/gif/pic18.gif"),
  },
  {
    key: 20,
    title: "",
    image: require("../../../../assets/images/gif/pic19.gif"),
  },
  {
    key: 21,
    title: "",
    image: require("../../../../assets/images/gif/pic20.gif"),
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
        <View style={styles.container}>
          <Text key={el.key} style={styles.titleTxt}>
            {el.title}
          </Text>
          <Image style={styles.image} source={el.image} />
        </View>
      ))}
    </Swiper>
  );
};

export default JagsaaliinAjillaga;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTxt: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    marginTop: 20,
    width: "60%",
    height: "90%",
  },
});
