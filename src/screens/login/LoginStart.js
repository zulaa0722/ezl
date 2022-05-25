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
import HTMLView from "react-native-htmlview";
import axios from "../../axios/axios-purchase";
import {
  insertPurchase,
  selectPurchase,
  selectPurchaseIsMe,
} from "../../helpers/dbPurchase";

const regex = /<br|\n|\r\s*\\?>/g;
const LoginStart = (props) => {
  const [number, setNumber] = useState("");
  const [err, setErr] = useState(null);
  const [money, setMoney] = useState(null);

  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    checkIsLoggedIn();
    axios
      .post("/get/purchase/instruction")
      .then((res) => {
        setInstruction(res.data.msg);
      })
      .catch();
  }, []);

  const checkIsLoggedIn = () => {
    selectPurchase()
      .then((res) => {
        // console.log(res._array);
        if (res._array.length > 0) {
          props.navigation.navigate("home");
        }
      })
      .catch();
  };
  const checkIsMe = (data) => {
    selectPurchaseIsMe(number)
      .then((res) => {
        if (res._array.length > 0) {
          props.navigation.navigate("home");
        } else {
          setErr(data.msg);
          setMoney(null);
        }
      })
      .catch();
  };

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
        if (res.data.status === "errorLogin") {
          checkIsMe(res.data);

          return;
        }
        if (res.data.status === "success") {
          setErr(null);
          setMoney(null);
          insertPurchase(res.data.phoneNumber)
            .then((res) => {
              props.navigation.navigate("home");
            })
            .catch();
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
            <Text style={{ color: "#000000" }}>Ашиглах заавар : </Text>
          </View>
          <View style={styles.inputRow}>
            <ScrollView style={styles.txtScrollView}>
              <HTMLView
                value={
                  "<div>" + instruction.trim().replace(regex, "") + "</div>"
                }
                stylesheet={styles}
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
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 55,
    height: 73,
  },
  logoSide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputSide: {
    flex: 1,
  },
  buttonSide: {
    flex: 1,
  },
  nameTxt: {
    color: "#fff012",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "60%",
    marginLeft: 12,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: "#30396f",
    backgroundColor: "#fff",
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: "#000000",
  },
  txtScrollView: {
    width: "90%",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 12,
    marginRight: 20,
    padding: 10,
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
});
