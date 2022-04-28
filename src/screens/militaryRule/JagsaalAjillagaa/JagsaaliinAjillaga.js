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
    title: "Автоматыг оосорт тааруулах-Буу шалгах",
    image: require("../../../../assets/images/gif/pic11.gif"),
  },
  {
    key: 13,
    title: "Буу тавих байдал",
    image: require("../../../../assets/images/gif/pic12.gif"),
  },
  {
    key: 14,
    title: "Байран дээрх буюу хөдөлгөөн дундах ёсолгоо",
    image: require("../../../../assets/images/gif/pic13.gif"),
  },

  {
    key: 15,
    title: "Байлдааны Тугийг жагсаалд авч зогсох байдал",
    image: require("../../../../assets/images/gif/pic14.gif"),
  },
  {
    key: 16,
    title: "Ёслолын жагсаалаар явах үед байлдааны тугийг барих байдал",
    image: require("../../../../assets/images/gif/pic15.gif"),
  },
  {
    key: 17,
    title:
      "Бөмбөр, бүрээг үүрч Жагсаалын үндсэн зогсолтоор зогсох, Тоглолтын үед, Дохио өгөх үед бүрээг барьж зогсох",
    image: require("../../../../assets/images/gif/pic16.gif"),
  },
  {
    key: 18,
    title: "Бууг хөлд, мөрөнд, гарт авах ажиллагаа",
    image: require("../../../../assets/images/gif/pic17.gif"),
  },
  {
    key: 19,
    title: "Бууг мөрөнд авах ажиллагаа",
    image: require("../../../../assets/images/gif/pic18.gif"),
  },
  {
    key: 20,
    title: "Бууг харуулд авч ёслох",
    image: require("../../../../assets/images/gif/pic19.gif"),
  },

  {
    key: 21,
    title: "Сэлэм сугалах",
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
        <View key={el.key} style={styles.container}>
          <Text style={styles.titleTxt}>{el.title}</Text>
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
    // justifyContent: "space-around",
    // height: "100%",
    // width: "100%",
    // display: "flex",
    justifyContent: "center",
  },
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    // height: "100%",
    // width: "100%",
    // flexDirection: "vertical",
    // flex: 1,
    resizeMode: "stretch",
  },
  titleTxt: {
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "90%",
    resizeMode: "contain",
    //
  },
});
