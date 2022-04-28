import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import { NavigationContainer, Header } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegulationHome from "./src/screens/regulation/RegulationHome";
import HomeScreen from "./src/screens/Home";
import { fetchData } from "./src/helpers/fetchData";
import LoginScreen from "./src/screens/Login";
import * as dbRegulation from "./src/helpers/dbRegulation";
import RegulationReading from "./src/screens/regulation/RegulationReadingScreen";
import MilitaryHome from "./src/screens/militaryRule/Home";
import { initPurchaseDB } from "./src/helpers/dbPurchase";

// Цэргийн дүрэм components
import axios from "./src/axios/axios-milRule";
import ShowTitlesScreen from "./src/screens/militaryRule/MilitaryRule/ShowTitlesScreen";
import ShowPdfScreen from "./src/screens/militaryRule/MilitaryRule/ShowPdfScreen";
import * as dbMilRule from "./src/helpers/dbMilitaryRule";
import TestYourself from "./src/screens/militaryRule/TestYourself/TestYourselfScreen";
import TitleShowScreen from "./src/screens/militaryRule/TestYourself/TitleShowScreen";
import ExamScreen from "./src/screens/militaryRule/Exam/ExamScreen";
import ShowQuestions from "./src/screens/militaryRule/TestYourself/ShowQuestions";
import BureeBumbur from "./src/screens/militaryRule/BureeBumbur/BureeBumbur";
import BureeBumberPlay from "./src/screens/militaryRule/BureeBumbur/BureeBumberPlay";
import ShowQuestionSwiper from "./src/screens/militaryRule/TestYourself/ShowQuestionSwiper";
import ShowResult from "./src/screens/militaryRule/Exam/ShowResult";
import TestSound from "./src/screens/militaryRule/BureeBumbur/TestSound";

// Жагсаалын ажиллагаа
import JagsaaliinAjillaga from "./src/screens/militaryRule/JagsaalAjillagaa/JagsaaliinAjillaga";

// login
// import LoginScreen from "./src/screens/login/LoginScreen";
import LoginStart from "./src/screens/login/LoginStart";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const initDB = dbRegulation.initDb();
    const a = loadMilitaryRuleData();
    const shaa = initPurchaseDB();

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
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          headerBackButtonMenuEnabled: true,
          headerBackTitle: "Буцах",

          // headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#192f6a",
            color: "#fff",
          },
          // headerTitleStyle: { color: "#fff" },
          // header: (props) => <ImageHeaderMyshuu {...props} />,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="loginPage"
      >
        <Stack.Screen
          options={{ headerShown: false, title: "" }}
          name="loginPage"
          component={LoginStart}
        />
        <Stack.Screen name="TestSound" component={TestSound} />
        <Stack.Screen
          options={{ title: "МУ-ын Зэвсэгт хүчин" }}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: "Цэргийн дүрэм" }}
          name="ShowTitlesScreen"
          component={ShowTitlesScreen}
        />
        <Stack.Screen
          options={{ title: "Цэргийн дүрэм" }}
          name="ShowPdfScreen"
          component={ShowPdfScreen}
        />
        <Stack.Screen
          options={{ title: "Дүрэм журам" }}
          name="regulationHome"
          component={RegulationHome}
        />
        <Stack.Screen
          options={{ title: "Дүрэм журам" }}
          name="regulationReading"
          component={RegulationReading}
        />
        <Stack.Screen
          options={{ title: "Цэргийн дүрэм" }}
          name="MilitaryHome"
          component={MilitaryHome}
        />
        <Stack.Screen
          options={{ title: "Дадлагын тест" }}
          name="TestYourself"
          component={TestYourself}
        />
        <Stack.Screen
          options={{ title: "Дадлагын тест" }}
          name="TitleShowScreen"
          component={TitleShowScreen}
        />
        <Stack.Screen
          options={{
            title: "Шалгалт",
            headerBackButtonMenuEnabled: false,
            headerBackVisible: false,
          }}
          name="ExamScreen"
          component={ExamScreen}
        />
        <Stack.Screen
          options={{
            title: "Шалгалт",
            headerBackButtonMenuEnabled: false,
            headerBackVisible: false,
          }}
          name="ShowResult"
          component={ShowResult}
        />

        <Stack.Screen name="ShowQuestions" component={ShowQuestions} />
        <Stack.Screen
          options={{ title: "Бүрээ бөмбөр" }}
          name="BureeBumbur"
          component={BureeBumbur}
        />
        <Stack.Screen
          options={{ title: "Бүрээ бөмбөр" }}
          name="BureeBumberPlay"
          component={BureeBumberPlay}
        />

        <Stack.Screen
          options={{ title: "Жагсаалын ажиллагаа" }}
          name="JagsaaliinAjillaga"
          component={JagsaaliinAjillaga}
        />

        <Stack.Screen
          options={{ title: "Дадлагын тест" }}
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
