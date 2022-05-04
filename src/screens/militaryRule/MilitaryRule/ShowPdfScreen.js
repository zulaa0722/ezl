import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import axios from "../../../axios/axios-purchase";

const ShowPdfScreen = (props) => {
  const [laws, setlaws] = useState("");
  console.log(props.route.params.id);
  useEffect(() => {
    axios
      .post("/get/military/rule", {
        id: props.route.params.id,
      })
      .then((res) => {
        if (!res.data) {
          setlaws("Өгөгдөл оруулаагүй байна.");
        } else {
          setlaws(res.data.mainInfo);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let laws123 = "dfgdfgdfgfg123";

  return (
    <>
      {laws == "Өгөгдөл оруулаагүй байна." && <Text>{laws}</Text>}
      {laws != "Өгөгдөл оруулаагүй байна." && (
        <WebView
          style={styles.container}
          originWhitelist={["*"]}
          source={{
            html: "" + laws,
          }}
        />
      )}
    </>
  );
};

export default ShowPdfScreen;

const styles = StyleSheet.create({});
