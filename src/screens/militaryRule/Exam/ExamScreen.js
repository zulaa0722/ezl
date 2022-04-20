import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { selectQuestions } from "../../../helpers/dbMilitaryRule";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    // image: require("./assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    // image: require("./assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require("./assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default class App extends React.Component {
  state = {
    showRealApp: false,
    questions: [],
  };
  componentDidMount = () => {
    console.log("asd");
    selectQuestions()
      .then((res) => {
        console.log(res);
        this.setState({ questions: res._array });
      })
      .catch((err) => {});
  };
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.question}</Text>
        {/* <Image source={item.image} /> */}
        <Text style={styles.text}>{item.question}</Text>
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
        <>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text>asdas</Text>
            </TouchableOpacity>
          </View>
          <AppIntroSlider
            renderItem={this._renderItem}
            data={this.questions}
            onDone={this._onDone}
          />
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    // flex: 1,
    flexDirection: "column",
  },
  //[...]
});
