import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { selectLaws } from "../../helpers/dbRegulation";

const RegulationReadingScreen = (props) => {
  const [laws, setLaws] = useState([]);

  // console.log(props.route.params.id);
  useEffect(() => {
    selectLaws(props.route.params.id)
      .then((res) => {
        setLaws(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var arr = laws[0];
  if (!arr) {
    return <Text>Мэдээлэл байхгүй байна.</Text>;
  }

  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{
        html: "" + laws[0].laws,
      }}
    />
  );
};

export default RegulationReadingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    color: "black",
    fontSize: 80,
    fontWeight: "bold",
    borderRadius: 5,
  },
});
