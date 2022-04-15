import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = (props) => {
  const clickTestYourself = () => {
    props.navigation.navigate("TestYourself");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/thd01.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity>
          <Text style={styles.text}>Цэргийн дүрэм</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickTestYourself}>
          <Text style={styles.text}>Дадлагын тест</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Шалгалтын тест</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Жагсаалын ажиллагаа</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Бүрээ бөмбөр</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
