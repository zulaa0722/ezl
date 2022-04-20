import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegulationHome from "./src/screens/regulation/RegulationHome";
import HomeScreen from "./src/screens/Home";
import { fetchData } from "./src/helpers/fetchData";
import LoginScreen from "./src/screens/Login";
import * as dbRegulation from "./src/helpers/dbRegulation";
import RegulationReading from "./src/screens/regulation/RegulationReadingScreen";
import MilitaryHome from "./src/screens/militaryRule/Home";

// Цэргийн дүрэм components
import axios from "./src/axios/axios-milRule";
// import * as
import TestYourself from "./src/screens/militaryRule/TestYourself/TestYourselfScreen";
import TitleShowScreen from "./src/screens/militaryRule/TestYourself/TitleShowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const initDB = dbRegulation.initDb();
    loadMilitaryRuleData();
    fetchData("getData.php", "")
      .then((res) => {
        const insertLawTypes = dbRegulation.insertLawTypes(res.lawType);
        const insertArticles = dbRegulation.insertArticles(res.articles);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchData("getLaws.php", "")
      .then((res) => {
        const insertLaws = dbRegulation.insertLaws(res.laws);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadMilitaryRuleData = () => {
    axios
      .get("discipline.php")
      .then((res) => {
        console.log(res.data.title.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="regulationHome" component={RegulationHome} />
        <Stack.Screen name="regulationReading" component={RegulationReading} />
        <Stack.Screen name="MilitaryHome" component={MilitaryHome} />
        <Stack.Screen name="TestYourself" component={TestYourself} />
        <Stack.Screen name="TitleShowScreen" component={TitleShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#000",
    justifyContent: "center",
  },
});
