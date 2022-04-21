import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { selectQuestions } from "../../../helpers/dbMilitaryRule";
import { selectQuestionsByDurem } from "../../../helpers/dbMilitaryRule";
import RadioGroup from "react-native-radio-buttons-group";
import RadioButton from "react-native-paper";
import ShowResult from "../../../components/militaryRule/testYourself/ShowResult";
import ShowQuestion from "../../../components/militaryRule/testYourself/ShowQuestion";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      questions: [],
      checkAns: false,
    };
  }
  ansBtnFn = (ans, true_answer) => {
    if (ans === true_answer) {
      console.log(ans);
      this.setState({ checkAns: true });
      //   console.log(this.state.checkAns);
    } else {
      this.setState({ checkAns: false });
    }
    // console.log(true_answer);
  };

  componentDidMount = () => {
    console.log("asd");
    selectQuestionsByDurem(this.props.route.params.bulegId)
      .then((res) => {
        console.log(res._array);
        this.setState({ questions: res._array });
      })
      .catch((err) => {});
  };

  _renderItem = ({ item }) => {
    // const [isTrue, setIsTrue] = useState(false);
    return (
      <View key={item.id} style={styles.slide}>
        <View style={styles.questionsStyle}>
          <Text style={styles.questionsText}>{item.question}</Text>
        </View>

        <TouchableOpacity
          style={styles.ansBtn}
          onPress={() => {
            this.ansBtnFn(item.ans1, item.true_answer);
          }}
        >
          <Text style={styles.ansText}>{item.ans1}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ansBtn}
          onPress={() => {
            this.ansBtnFn(item.ans2, item.true_answer);
          }}
        >
          <Text style={styles.ansText}>{item.ans2}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ansBtn}
          onPress={() => {
            this.ansBtnFn(item.ans3, item.true_answer);
          }}
        >
          <Text style={styles.ansText}>{item.ans3}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ansBtn}
          onPress={() => {
            this.ansBtnFn(item.ans4, item.true_answer);
          }}
        >
          <Text style={styles.ansText}>{item.ans4}</Text>
        </TouchableOpacity>

        {this.state.checkAns && <ShowResult />}
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
              data={this.state.questions}
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
