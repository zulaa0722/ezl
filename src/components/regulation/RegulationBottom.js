import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { selectArticles } from "../../helpers/dbRegulation";

const RegulationBottom = (props) => {
  const [articles, setArticles] = useState([]);
  const [id, setID] = useState("");

  // console.log(props);
  useEffect(() => {
    selectArticles(props.ids)
      .then((res) => {
        setArticles(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ids]);

  const navigateReading = (id) => {
    props.navigateTo(id);
  };

  return (
    <View>
      {/* <Text> asdfadsf {articles.length} asdf</Text> */}
      <FlatList
        data={articles}
        keyExtractor={articles.id}
        renderItem={(data) => (
          <TouchableOpacity
            onPress={() => {
              navigateReading(data.item.id);
            }}
            style={myStyle.btnStyle}
          >
            <View style={myStyle.wrapper}>
              <Text style={myStyle.text}>{data.item.articleName}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RegulationBottom;

const myStyle = StyleSheet.create({
  container: {},
  btnStyle: {
    // paddingTop: 5,
    marginTop: 5,
  },
  wrapper: {
    //flex: 1,
    flexDirection: "row",
    marginTop: 5,
    // paddingTop: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    margin: 10,
    // width: "90%",
    borderRadius: 5,
    // backgroundColor: "#fff",
  },
});
