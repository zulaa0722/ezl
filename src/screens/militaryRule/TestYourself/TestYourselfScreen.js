import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TestYourself = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FF9F4A", "#FF3C83"]}
        style={styles.background}
      />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Шалгалтын сэдвээ сонгоно уу</Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/military_rules/1.png")}
        />
        <Text>Цэргийн дотоод албаны дүрэм</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text>Цэргийн хүрээний ба харуулын албаны дүрэм</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text>Цэргийн жагсаалын дүрэм</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text>Цэргийн сахилгын дүрэм</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestYourself;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "orange",
  },
  headerView: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  menuButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // height: 400,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  image: {
    width: 30,
    height: 30,
  },
});
