import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { selectQuestionsByDurem } from "../../../helpers/dbMilitaryRule";
import ShowResult from "../../../components/militaryRule/testYourself/ShowResult";
import ShowQuestion from "../../../components/militaryRule/testYourself/ShowQuestion";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  //   componentDidMount = () => {
  //     console.log("asd");
  //     selectQuestionsByDurem(this.props.route.params.bulegId)
  //       .then((res) => {
  //         // console.log(res._array);
  //         this.setState({ questions: res._array });

  //         let answers = [];
  //         res._array.map((el) => {
  //           var el1 = { id: el.id, trueAnswer: el.true_answer, userAnswer: "" };
  //           answers.push(el1);
  //         });
  //         console.log(answers);
  //         this.setState({ answers: answers });
  //       })
  //       .catch((err) => {});
  //   };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <>
          <View style={styles.container}>
            <AppIntroSlider
              renderItem={this._renderItem}
              data={slides}
              onDone={this._onDone}
            />
          </View>
        </>
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

const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../../../assets/images/gif/bb1.gif"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../../../assets/images/gif/bb2.gif"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../../../assets/images/gif/bb3.gif"),
    backgroundColor: "#22bcb5",
  },
];
