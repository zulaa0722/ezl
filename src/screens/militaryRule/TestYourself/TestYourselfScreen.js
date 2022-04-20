import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TestYourself = (props) => {
  const clickMenu = (id, chapterName) => {
    // console.log(id);
    props.navigation.navigate("TitleShowScreen", {
      chapterID: id,
      chapterName: chapterName,
    });
  };

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
      <TouchableOpacity
        onPress={() => {
          clickMenu(1, "Цэргийн дотоод албаны дүрэм");
        }}
        style={[styles.menuButton, styles.menuButton1]}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/military_rules/1.png")}
        />
        <Text style={styles.menuButtonText}>Цэргийн дотоод албаны дүрэм</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          clickMenu(2, "Цэргийн хүрээний ба харуулын албаны дүрэм");
        }}
        style={[styles.menuButton, styles.menuButton2]}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/military_rules/2.png")}
        />
        <Text style={styles.menuButtonText}>
          Цэргийн хүрээний ба харуулын албаны дүрэм
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          clickMenu(3, "Цэргийн жагсаалын дүрэм");
        }}
        style={[styles.menuButton, styles.menuButton3]}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/military_rules/3.png")}
        />
        <Text style={styles.menuButtonText}>Цэргийн жагсаалын дүрэм</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          clickMenu(4, "Цэргийн сахилгын дүрэм");
        }}
        style={[styles.menuButton, styles.menuButton4]}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/military_rules/4.png")}
        />
        <Text style={styles.menuButtonText}>Цэргийн сахилгын дүрэм</Text>
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
    width: "90%",
    // marginHorizontal: 20,
    // paddingHorizontal: 20,
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  menuButton1: {
    backgroundColor: "#ff4c38",
  },
  menuButton2: {
    backgroundColor: "#3daeff",
  },
  menuButton3: {
    backgroundColor: "#ffbf29",
  },
  menuButton4: {
    backgroundColor: "#009e28",
  },
  menuButtonText: {
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    flexWrap: "wrap",
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
