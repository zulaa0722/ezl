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

const LoginStart = () => {
  const [number, setNumber] = useState(null);
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const clickLogin = () => {};

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
            <Text style={styles.nameTxt}> МОНГОЛ УЛСЫН </Text>
            <Text style={styles.nameTxt}> ЗЭВСЭГТ ХҮЧИН</Text>
          </View>
        </View>
        <View style={styles.inputSide}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              onChange={onChangeNumber}
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
              <Text>Нэвтрэх</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.lableDescription}>Ашиглах заавар:</Text>
          <View style={styles.inputRow}>
            <ScrollView style={styles.txtScrollView}>
              <Text style={{ color: "#000000" }}>
                Заавартай холбоотой мэдээлэл энэ талбард гарж ирнэ.
              </Text>
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
    opacity: 0.6,
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
    opacity: 0.6,
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
});
