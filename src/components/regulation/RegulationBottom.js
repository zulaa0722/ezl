import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Picker,
} from "react-native";
import {
  selectArticles,
  selectArticlesChildren,
} from "../../helpers/dbRegulation";
import ArticleChildren from "./ArticleChildren";

const RegulationBottom = (props) => {
  const [articles, setArticles] = useState([]);
  const [areYouHaveChild, setAreYouHaveChild] = useState(false);
  // const [isClick, setIsClick] = useState(1);
  const [getClickParentID, setGetClickParentID] = useState("");
  // const [selectedValue, setselectedValue] = useState("Java");

  useEffect(() => {
    selectArticlesChildren(props.ids)
      .then((res) => {
        setArticles(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ids]);

  const subItems = (clickParentID) => {
    setGetClickParentID(clickParentID);
    // {
    //   isClick == 0 ? setIsClick(1) : setIsClick(0);
    // }
  };

  const hiddenSubChildren = (childID) => {
    {
      getClickParentID == childID
        ? setAreYouHaveChild(true)
        : setAreYouHaveChild(false);
    }
  };

  const navigateReading = (id) => {
    props.navigateTo(id);
  };

  return (
    <FlatList
      data={articles}
      keyExtractor={articles.id}
      renderItem={(data) => {
        if (data.item.parentID == 0) {
          if (data.item.areYouHaveChildren == 1) {
            return (
              <TouchableOpacity
                onPress={() => {
                  subItems(data.item.id);
                }}
                style={areYouHaveChild ? myStyle.btnStyle : myStyle.btnStyle}
              >
                <View style={myStyle.wrapper}>
                  <Text style={myStyle.text}>
                    {data.item.articleName} {data.item.id}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
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
            );
          }
        } else {
          return (
            <ArticleChildren
              navigateTo={navigateReading}
              data={data}
              hiddenSubChildren={hiddenSubChildren}
              getClickParentID={getClickParentID}
              areYouHaveChild={areYouHaveChild}
            />
          );
        }
      }}
    />
  );
};

export default RegulationBottom;

const myStyle = StyleSheet.create({
  container: {},
  btnStyle: {
    marginTop: 5,
  },
  wrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    margin: 10,
    borderRadius: 5,
  },
});
