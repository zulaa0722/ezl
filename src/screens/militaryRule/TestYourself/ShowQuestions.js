import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { selectQuestions } from "../../../helpers/dbMilitaryRule";
import RadioGroup from "react-native-radio-buttons-group";

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
    // selectQuestions()
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({ questions: res._array });
    //   })
    //   .catch((err) => {});
  };
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image source={item.image} /> */}
        <Text style={styles.quesText}>{item.text}</Text>
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
          <View style={styles.container}>
            {/* <Text>TitleShowScreen {props.route.params.chapterID}</Text>
      <Text>hed bn ve {titles.length}</Text> */}
            <View style={styles.headerRow}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  // props.navigation.navigate("regulationHome");
                }}
              >
                <Text>Буцах</Text>
              </TouchableOpacity>
              <Text style={styles.line}> </Text>

              <Text style={styles.text}>
                {this.props.route.params.chapterName}
              </Text>

              {/* </LinearGradient> */}
            </View>

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
  title: {},
  quesText: {
    color: "black",
  },
});
