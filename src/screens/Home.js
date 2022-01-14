import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

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
          style={{ flex: 1 }}
          source={{
            uri: "https://www.toptal.com/designers/subtlepatterns/patterns/moroccan-flower-dark.png",
          }}
        >
          {/* <Stack.Navigator> */}
          <TouchableOpacity style={home_styles.touchStyle}>
            <Text style={home_styles.text}>
              Батлан хамгаалах, Зэвсэгт хүчний тухай хуулиуд
            </Text>
          </TouchableOpacity>
          {/* </Stack.Navigator> */}

          <TouchableOpacity
            style={home_styles.touchStyle}
            onPress={() => {
              props.navigation.navigate("regulationHome");
            }}
          >
            <Text style={home_styles.text}>Дүрэм, журам, бусад</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={home_styles.touchStyle}
            onPress={() => {
              props.navigation.navigate("MilitaryHome");
            }}
          >
            <Text style={home_styles.text}>Цэргийн дүрэм</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "column-reverse",
              //   backgroundColor: "powderblue",
            }}
          >
            <Text style={{ backgroundColor: "red", textAlign: "center" }}>
              Зэвсэгт хүчний Программ Хангамжийн төв
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Home;

const home_styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  touchStyle: {
    justifyContent: "center",
    width: "50%",
    backgroundColor: "yellow",
    marginLeft: "25%",
    marginTop: "20%",
    marginBottom: "10%",
    height: "15%",
    borderRadius: 20,
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "yellow",
    padding: 10,
    // flex: 1,
  },
  img: {
    width: "100%",
    height: "50%",
  },
});
