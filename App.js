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

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const initDB = dbRegulation.initDb();
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

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="regulationHome" component={RegulationHome} />
        <Stack.Screen name="regulationReading" component={RegulationReading} />
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
