import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  selectArticles,
  selectArticlesChildren,
} from "../../helpers/dbRegulation";
import ArticleChildren from "./ArticleChildren";

const RegulationBottom = (props) => {
  const [articles, setArticles] = useState([]);
  const [id, setID] = useState("");
  const [areYouHaveChild, setAreYouHaveChild] = useState(false);
  const [getClickParentID, setGetClickParentID] = useState("");

  // console.log(props);
  useEffect(() => {
    // selectArticles(props.ids)
    //   .then((res) => {
    //     setArticles(res._array);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    selectArticlesChildren(props.ids)
      .then((res) => {
        // console.log("---------");
        // console.log(res);
        // console.log("---------");
        setArticles(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ids]);

  const subItems = (clickParentID) => {
    setGetClickParentID(clickParentID);
    // if (getClickParentID == childID) {

    // }
    if (areYouHaveChild == false) {
      setAreYouHaveChild(true);
    } else {
      setAreYouHaveChild(false);
    }
  };

  const hiddenSubChildren = (childID) => {
    console.log(childID);
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
                style={myStyle.btnStyle}
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
          // <ArticleChildren navigateTo={navigateReading} data={data} />;
          // console.log(data.item.isDurem);
          return (
            <ArticleChildren
              navigateTo={navigateReading}
              data={data}
              hiddenSubChildren={hiddenSubChildren}
              getClickParentID={getClickParentID}
              areYouHaveChild={areYouHaveChild}
            />
          );

          // if (!areYouHaveChild) {
          //   console.log(areYouHaveChild);
          //   return <ArticleChildren navigateTo={navigateReading} data={data} />;
          // }
        }
      }}
      // renderItem={(data) => (
      //   <>

      //     <TouchableOpacity
      //       onPress={() => {
      //         navigateReading(data.item.id);
      //       }}
      //       style={myStyle.btnStyle}
      //     >
      //       <View style={myStyle.wrapper}>
      //         <Text style={myStyle.text}>{data.item.articleName}</Text>
      //       </View>
      //     </TouchableOpacity>
      //     <ArticleChildren data={data} />
      //   </>
      // )}
    />
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
