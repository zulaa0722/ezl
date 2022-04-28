import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";

const BureeBumbur = (props) => {
  const clickOnRow = (id, type, name) => {
    props.navigation.navigate("BureeBumberPlay", {
      id: id,
      type: type,
      name: name,
    });
  };

  return (
    <ScrollView style={styles.bodySide}>
      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(1, "Бүрээ", "Босох");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Босох</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(2, "Бүрээ", "Хичээл эхэллээ");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Хичээл эхэллээ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(3, "Бүрээ", "Хоолондоо");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Хоолондоо</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(4, "Бүрээ", "Жагс");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Жагс</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(5, "Бүрээ", "Туяа");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Туяа</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(6, "Бүрээ", "Төгсгөл");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Төгсгөл</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(7, "Бүрээ", "Анхаар");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Анхаар</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(8, "Бүрээ", "Цуглар");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Цуглар</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(9, "Бүрээ", "Захирагч нар цуглар");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Захирагч нар цуглар</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(10, "Бүрээ", "Гал нээ");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Гал нээ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(11, "Бүрээ", "Түгшүүр");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Түгшүүр</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(12, "Бүрээ", "Харуулд алхаад-МАРШ");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.rowText}>Харуулд алхаад-МАРШ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(13, "Бөмбөр", "Тугийн дор");
        }}
      >
        <Image
          style={styles.imageBumbur}
          source={require("../../../../assets/images/icons/bombor.png")}
        />
        <Text style={styles.rowText}>Тугийн дор</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(14, "Бөмбөр", "Харуулд алхаад-МАРШ");
        }}
      >
        <Image
          style={styles.imageBumbur}
          source={require("../../../../assets/images/icons/bombor.png")}
        />
        <Text style={styles.rowText}>Харуулд алхаад-МАРШ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(15, "Бөмбөр", "Аяны марш-№1");
        }}
      >
        <Image
          style={styles.imageBumbur}
          source={require("../../../../assets/images/icons/bombor.png")}
        />
        <Text style={styles.rowText}>Аяны марш-№1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(16, "Бөмбөр", "Аяны марш-№2");
        }}
      >
        <Image
          style={styles.imageBumbur}
          source={require("../../../../assets/images/icons/bombor.png")}
        />
        <Text style={styles.rowText}>Аяны марш-№2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.listBtn}
        onPress={() => {
          clickOnRow(17, "Бөмбөр", "Түгшүүр");
        }}
      >
        <Image
          style={styles.imageBumbur}
          source={require("../../../../assets/images/icons/bombor.png")}
        />
        <Text style={styles.rowText}>Түгшүүр</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BureeBumbur;

const styles = StyleSheet.create({
  bodySide: {
    flex: 1,
    // padding: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  rowText: {
    color: "black",
    fontSize: 21,
    fontWeight: "bold",
  },
  listBtn: {
    flexDirection: "row",
    alignItems: "center",
    // flex: 1,
    padding: 10,
    height: 60,
    //marginBottom: 5,
    // borderRadius: 5,
    // backgroundColor: "green",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  image: {
    marginRight: 10,
    width: 70,
    height: 30,
    justifyContent: "center",
  },

  imageBumbur: {
    marginRight: 15,
    width: 65,
    height: 50,
    justifyContent: "center",
  },
});
