import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { selectQuestions } from "../../../helpers/dbMilitaryRule";

export default class App extends React.Component {
  state = {
    showRealApp: false,
    questions: [],
  };
  componentDidMount = () => {
    console.log("asd");
    selectQuestions()
      .then((res) => {
        console.log(res._array);
        this.setState({ questions: res._array });
      })
      .catch((err) => {});
  };
  _renderItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.slide}>
        <View style={styles.questionsStyle}>
          <Text style={styles.questionsText}>{item.question}</Text>
        </View>
        {/* <Image source={item.image} /> */}
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton}>
              <Text>Буцах</Text>
            </TouchableOpacity>
            <Text style={styles.line}> </Text>
            <Text style={styles.text}>Шалгалт</Text>
            <TouchableOpacity style={styles.backButton}>
              <Text>Дуусгах</Text>
            </TouchableOpacity>
          </View>
          <AppIntroSlider
            renderItem={this._renderItem}
            data={this.state.questions}
            onDone={this._onDone}
          />
        </View>
      );
    }
  }
}

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
  line: {
    width: 1,
    backgroundColor: "#fff",
    marginRight: 3,
    height: "100%",
  },

  slide: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },

  quesText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
  },
  ansBtn: {
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "green",
  },
  ansText: {
    color: "#fff",
    fontSize: 13,
  },
  questionsStyle: {
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 2,
    padding: 5,
    marginBottom: 5,
  },
  questionsText: {
    color: "black",
    fontSize: 13,
  },
});
