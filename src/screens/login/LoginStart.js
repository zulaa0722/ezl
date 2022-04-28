import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";
import axios from "../../axios/axios-purchase";

const LoginStart = (props) => {
  const [number, setNumber] = useState("");
  const [err, setErr] = useState(null);
  const [money, setMoney] = useState(null);

  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    axios
      .post("/get/purchase/instruction")
      .then((res) => {
        setInstruction(res.data.msg);
      })
      .catch();
  }, []);

  const clickLogin = () => {
    setErr(null);
    setMoney(null);
    axios
      .post("/check/purchase", { phone: number })
      .then((res) => {
        // errorMoney
        // success
        // error
        console.log(res.data);
        if (res.data.status === "moneyError") {
          setErr(
            res.data.msg +
              ` Та ${res.data.money} төгрөг төлсөн байна. Программын үнэ 5000 төгрөг`
          );
          setMoney(res.data.money);
          return;
        }
        if (res.data.status === "error") {
          setErr(res.data.msg);
          setMoney(null);
          return;
        }
        if (res.data.status === "success") {
          setErr(null);
          setMoney(null);
          props.navigation.navigate("home");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // var arr = instruction[0];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/background.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.logoSide}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/icons/Mongolian_Armed_forces_emblem.png")}
          />
          <View>
            <Text style={styles.nameTxt}> МОНГОЛ УЛСЫН</Text>
            <Text style={styles.nameTxt}> ЗЭВСЭГТ ХҮЧИН</Text>
          </View>
        </View>
        <View style={styles.inputSide}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setNumber(text);
              }}
              value={number}
              placeholder="Утасны дугаар оруулан уу"
              highlightColor={"#00BCD4"}
              numeric
              keyboardType={"numeric"}
              maxLength={8}
            />
            <TouchableOpacity
              onPress={() => {
                clickLogin();
              }}
              style={styles.submitButton}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Нэвтрэх</Text>
            </TouchableOpacity>
          </View>
          {err && (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{err}</Text>
            </View>
          )}
          <View style={styles.lableDescription}>
            <Text style={{ color: "#000000" }}>Ашиглах заавар:</Text>
          </View>
          <View style={styles.inputRow}>
            <ScrollView style={styles.txtScrollView}>
              <WebView
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.webInstr}
                originWhitelist={["*"]}
                source={{
                  html: "" + instruction,
                }}
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.buttonSide}></View>
      </ImageBackground>
    </View>
  );
};

export default LoginStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: "center",
    // backgroundColor: "transparent",
    // backgroundColor: "grey",
    // backgroundColor: "transparent",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: 55,
    height: 73,
  },
  logoSide: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  inputSide: {
    flex: 1,
    // flexDirection: "row",
    // backgroundColor: "grey",
  },
  buttonSide: {
    flex: 1,
  },
  nameTxt: {
    color: "#fff012",
    fontSize: 24,
    fontWeight: "bold",
    // textAlign: "center",
    // textAlignVertical: "center",
  },
  input: {
    height: 40,
    width: "60%",
    // width: "90%",
    // margin: 12,
    marginLeft: 12,
    // borderWidth: 2,
    borderBottomWidth: 2,
    padding: 10,
    // borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#fff",
    color: "#30396f",
    backgroundColor: "#fff012",
  },
  inputRow: {
    flexDirection: "row",
    width: "90%",
  },
  lableDescription: {
    width: "90%",
    backgroundColor: "#fff012",
    paddingLeft: 10,
    marginTop: 10,
    paddingTop: 0,
    marginLeft: 12,
    marginRight: 20,
    paddingRight: 10,
    // opacity: 0.6,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: "#000000",
    // borderRadius: 5,
  },
  txtScrollView: {
    // position: "absolute",
    width: "90%",
    backgroundColor: "#fff012",
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 12,
    marginRight: 20,
    padding: 10,
    // opacity: 0.7,
    // borderRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,

    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  submitButton: {
    width: "30%",
    height: 40,
    backgroundColor: "green",
    borderBottomWidth: 2,
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "#fff",
    alignItems: "center",
    color: "#30396f",
  },
  errMsgView: {
    marginTop: 5,
    marginLeft: 12,
    marginRight: 20,
    padding: 10,
    backgroundColor: "#fff012",
    borderRadius: 5,
  },
  errMsg: {
    color: "red",
  },
  webInstr: {
    padding: 100,
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    borderRadius: 5,
  },
});
