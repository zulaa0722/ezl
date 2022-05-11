import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { selectTitles } from "../../../helpers/dbMilitaryRule";
const TitleShowScreen = (props) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    selectTitles(props.route.params.chapterID)
      .then((res) => {
        setTitles(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickOnRow = (id, counts) => {
    props.navigation.navigate("ShowQuestionSwiper", {
      chapterName: props.route.params.chapterName,
      chapterID: props.route.params.chapterID,
      bulegId: id,
      niitID: counts,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.text}> {props.route.params.chapterName}</Text>
      </View>

      <ScrollView style={styles.bodySide}>
        {titles.map((el, index) => (
            <TouchableOpacity
              key={index}
              style={styles.listBtn}
              onPress={() => {
                clickOnRow(el.id, el.count);
              }}
            >
              <Text style={styles.rowText}>{el.name}</Text>
              <Text style={styles.rowTxtCount}>= {el.count} асуулттай</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default TitleShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backButton: {
    backgroundColor: "#00aeef",
    padding: 15,
    height: 45,
  },
  headerRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    width: "100%",
    backgroundColor: "green",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    color: "#fff",
    padding: 2,
  },
  rowText: {
    color: "black",
  },
  rowTxtCount: {
    color: "grey",
    textAlign: "right",
    fontSize: 9,
    padding: 0,
    margin: 0,
  },
  line: {
    width: 1,
    backgroundColor: "#fff",
    marginRight: 3,
    height: "100%",
  },
  bodySide: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  listBtn: {
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
});
