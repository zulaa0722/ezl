import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RegulationHome } from "./regulation/RegulationHome";


const Stack = createNativeStackNavigator();

const Home = (props) => {
  const navigateTo = (regulationReading, id) => {
    props.navigation.navigate(regulationReading, [id]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={home_styles.container}>
        <ImageBackground
          style={{ flex: 1, justifyContent: "flex-end" }}
          source={require("../../assets/images/thd01.jpg")}
          >
          <TouchableOpacity style={home_styles.newButton}>
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={home_styles.btnGradient}
            >
              <Image
                style={home_styles.image}
                source={require("../../assets/images/law04.png")}
              />
              <Text style={home_styles.line}> </Text>
              <Text style={home_styles.text}>
                Батлан хамгаалах, Зэвсэгт хүчний тухай хуулиуд
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.newButton}
            onPress={() => {
              props.navigation.navigate("MilitaryHome");
            }}
          >
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={home_styles.btnGradient}
            >
              <Image
                style={home_styles.image}
                source={require("../../assets/images/law07.png")}
              />
              <Text style={home_styles.line}> </Text>
              <Text style={home_styles.text}>Монгол Улсын цэргийн нийтлэг дүрмүүд</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.newButton}
            onPress={() => {
              props.navigation.navigate("regulationHome");
            }}
          >
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={home_styles.btnGradient}
            >
              <Image
                style={home_styles.image}
                source={require("../../assets/images/law02.png")}
              />
              <Text style={home_styles.line}> </Text>
              <Text style={home_styles.text}>ЦАХ-ийн холбогдох дүрэм, журам</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={home_styles.copyRight}>
            Зэвсэгт хүчний © Программ Хангамжийн төв
          </Text>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Home;

const home_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
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
  newButton: {
    height: 60,
    marginBottom: "5%",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
    borderColor: "#fff",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 10,
    flex: 1,
    color: "#fff",
  },
  line: {
    width: 1,
    backgroundColor: "#fff",
    marginRight: 3,
    height: "100%",
  },

  image: {
    marginLeft: 10,
    marginRight: 5,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  copyRight: {
    fontSize: 12,
    textAlign: "center",
    paddingRight: 5,
    backgroundColor: "gray",
    opacity: 0.5,
  },
});
