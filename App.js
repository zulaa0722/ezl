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
import * as dbMilRule from "./src/helpers/dbMilitaryRule";
import TestYourself from "./src/screens/militaryRule/TestYourself/TestYourselfScreen";
import TitleShowScreen from "./src/screens/militaryRule/TestYourself/TitleShowScreen";
import ExamScreen from "./src/screens/militaryRule/Exam/ExamScreen";
import ShowQuestions from "./src/screens/militaryRule/TestYourself/ShowQuestions";
import BureeBumbur from "./src/screens/militaryRule/BureeBumbur/BureeBumbur";
import BureeBumberPlay from "./src/screens/militaryRule/BureeBumbur/BureeBumberPlay";
import ShowQuestionSwiper from "./src/screens/militaryRule/TestYourself/ShowQuestionSwiper";

// Жагсаалын ажиллагаа
import JagsaaliinAjillaga from "./src/screens/militaryRule/JagsaalAjillagaa/JagsaaliinAjillaga";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const initDB = dbRegulation.initDb();
    const a = loadMilitaryRuleData();

    const titless = dbMilRule.selectTitles(1);
    console.log(titless);
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

  const loadMilitaryRuleData = async () => {
    await axios
      .get("discipline.php")
      .then((res) => {
        const initDB = dbMilRule.initDB();
        const initDB1 = dbMilRule.initDB1();
        const insertTitles = dbMilRule.insertTitles(res.data.title);
        const insertQuestions = dbMilRule.insertQuestions(res.data.questions);
        // console.log(res.data.questions);
        // const selects = dbMilRule.selectQuestions();
        // console.log(selects);
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
        <Stack.Screen name="ExamScreen" component={ExamScreen} />
        <Stack.Screen name="ShowQuestions" component={ShowQuestions} />
        <Stack.Screen name="BureeBumbur" component={BureeBumbur} />
        <Stack.Screen name="BureeBumberPlay" component={BureeBumberPlay} />
        <Stack.Screen
          name="JagsaaliinAjillaga"
          component={JagsaaliinAjillaga}
        />

        <Stack.Screen
          name="ShowQuestionSwiper"
          component={ShowQuestionSwiper}
        />
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
