import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = (props) => {
  const clickMilitaryRule = () => {
    props.navigation.navigate("ShowTitlesScreen");
  };

  const clickTestYourself = () => {
    props.navigation.navigate("TestYourself");
  };

  const clickTestShow = () => {
    props.navigation.navigate("ExamScreen");
  };
  const clickJagsaaliinAjillaga = () => {
    props.navigation.navigate("JagsaaliinAjillaga");
  };
  const clickBureeBumbur = () => {
    props.navigation.navigate("BureeBumbur");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/thd01.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <TouchableOpacity style={styles.newButton} onPress={clickMilitaryRule}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.btnGradient}
          >
            <Image
              style={styles.image}
              source={require("../../../assets/images/tsd01.png")}
            />
            <Text style={styles.line}> </Text>
            <Text style={styles.text}>Цэргийн дүрэм</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newButton} onPress={clickTestYourself}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.btnGradient}
          >
            <Image
              style={styles.image}
              source={require("../../../assets/images/tsd02.png")}
            />
            <Text style={styles.line}> </Text>
            <Text style={styles.text}>Дадлагын тест</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newButton} onPress={clickTestShow}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.btnGradient}
          >
            <Image
              style={styles.image}
              source={require("../../../assets/images/tsd03.png")}
            />
            <Text style={styles.line}> </Text>
            <Text style={styles.text}>Шалгалтын тест</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.newButton}
          onPress={clickJagsaaliinAjillaga}
        >
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.btnGradient}
          >
            <Image
              style={styles.image}
              source={require("../../../assets/images/tsd04.png")}
            />
            <Text style={styles.line}> </Text>
            <Text style={styles.text}>Жагсаалын ажиллагаа</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.newButton} onPress={clickBureeBumbur}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.btnGradient}
          >
            <Image
              style={styles.image}
              source={require("../../../assets/images/tsd05.png")}
            />
            <Text style={styles.line}> </Text>
            <Text style={styles.text}>Бүрээ бөмбөр</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  newButton: {
    // position: "absolute",
    // bottom: 0,

    // alignItems: "center",
    // flexDirection: "row",
    height: 60,
    // backgroundColor: "#00aeef",
    marginBottom: "5%",
    marginRight: 20,
    marginLeft: 20,

    borderRadius: 15,
    borderColor: "#fff",
    // borderWidth: 1,
  },
  btnGradient: {
    flex: 1,
    height: 60,
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 1,
    alignItems: "center",
  },
  image: {
    marginLeft: 5,
    marginRight: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  line: {
    width: 1,
    backgroundColor: "#fff",
    // backgroundColor: "#f0c418",
    marginRight: 3,
    height: "100%",
  },
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 10,
    flex: 1,
    color: "#fff",

    // color: "white",
    // fontSize: 20,
    // lineHeight: 60,
    // fontWeight: "bold",
    // textAlign: "center",
    // backgroundColor: "#000000c0",
    // marginHorizontal: 20,
    // marginBottom: 20,
  },
});
