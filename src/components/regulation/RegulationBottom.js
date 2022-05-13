import React, { useEffect, useState } from "react";
import axios from "../../axios/axios-purchase";
// import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from "react-native";

const ExpandableComponent = ({ navigateTo, item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onClickFunction}
        style={styles.header}
      >
        <View style={styles.textOneRow}>
          <View style={styles.headerViewLeft}>
            <Text style={styles.headerText}>{item.articleName}</Text>
          </View>
          <View style={styles.headerViewRight}>
            {/* {item.childrenCount > 0 && <Text style={styles.headerText}>-</Text>} */}
            {item.childrenCount > 0 && (
              <Icon
                style={styles.headerText}
                name="arrow-down"
                size={15}
                color="black"
              ></Icon>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.children != null &&
          item.children.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.content}
              onPress={
                () => navigateTo(item.id)
                // alert("Id: " + item.id + " val: " + item.childName)
              }
            >
              <Text style={styles.text}>
                {key == 0 ? key + 1 : key + 1}. {item.childName}
              </Text>
              <View style={styles.separator} />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const RegulationBottom = (props) => {
  const [multiSelect, setMultiSelect] = useState(false);

  const [disciplineArticles, setdisciplineArticles] = useState([]);

  useEffect(() => {
    axios
      .post("/get/discipline/article/expandable", {
        lawID: props.ids,
      })
      .then((response) => {
        setdisciplineArticles(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.ids]);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...disciplineArticles];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setdisciplineArticles(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <View style={{ flexDirection: "row", padding: 10 }}>
          <Text style={styles.titleText}>Expandable List View</Text>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {multiSelect
                ? "Enable Single \n Expand"
                : "Enalble Multiple \n Expand"}
            </Text>
          </TouchableOpacity>
        </View> */}
        <ScrollView>
          <View style={styles.headerOneSpace}></View>
          {disciplineArticles.map((item, key) => (
            <ExpandableComponent
              key={item.id}
              onClickFunction={() => {
                if (item.children.length == 0) {
                  props.navigateTo(item.id);
                } else {
                  updateLayout(key);
                }
              }}
              navigateTo={props.navigateTo}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegulationBottom;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerOneSpace: {
    marginTop: 5,
  },
  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
    margin: 2,
    marginRight: 5,
    marginLeft: 5,

    borderRadius: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },

  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    // color: "#606070",
    color: "#3c3c42",
    padding: 5,
  },
  content: {
    // padding: 10,
    marginRight: 10,
    marginLeft: 10,
    // borderRadius: 20,

    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  textOneRow: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "center",
  },
  headerViewLeft: { flex: 0.95 },
  headerViewRight: { flex: 0.05 },
});

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Picker,
// } from "react-native";
// import {
//   selectArticles,
//   selectArticlesChildren,
// } from "../../helpers/dbRegulation";
// import ArticleChildren from "./ArticleChildren";

// const RegulationBottom = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [areYouHaveChild, setAreYouHaveChild] = useState(false);
//   // const [isClick, setIsClick] = useState(1);
//   const [getClickParentID, setGetClickParentID] = useState("");
//   // const [selectedValue, setselectedValue] = useState("Java");

//   useEffect(() => {
//     selectArticlesChildren(props.ids)
//       .then((res) => {
//         setArticles(res._array);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [props.ids]);

//   const subItems = (clickParentID) => {
//     setGetClickParentID(clickParentID);
//     // {
//     //   isClick == 0 ? setIsClick(1) : setIsClick(0);
//     // }
//   };

//   const hiddenSubChildren = (childID) => {
//     {
//       getClickParentID == childID
//         ? setAreYouHaveChild(true)
//         : setAreYouHaveChild(false);
//     }
//   };

//   const navigateReading = (id) => {
//     props.navigateTo(id);
//   };

//   return (
//     <FlatList
//       data={articles}
//       keyExtractor={articles.id}
//       renderItem={(data) => {
//         if (data.item.parentID == 0) {
//           if (data.item.areYouHaveChildren == 1) {
//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   subItems(data.item.id);
//                 }}
//                 style={areYouHaveChild ? myStyle.btnStyle : myStyle.btnStyle}
//               >
//                 <View style={myStyle.wrapper}>
//                   <Text style={myStyle.text}>
//                     {data.item.articleName} {data.item.id}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           } else {
//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   navigateReading(data.item.id);
//                 }}
//                 style={myStyle.btnStyle}
//               >
//                 <View style={myStyle.wrapper}>
//                   <Text style={myStyle.text}>{data.item.articleName}</Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           }
//         } else {
//           return (
//             <ArticleChildren
//               navigateTo={navigateReading}
//               data={data}
//               hiddenSubChildren={hiddenSubChildren}
//               getClickParentID={getClickParentID}
//               areYouHaveChild={areYouHaveChild}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

// export default RegulationBottom;

// const myStyle = StyleSheet.create({
//   container: {},
//   btnStyle: {
//     marginTop: 5,
//   },
//   wrapper: {
//     flexDirection: "row",
//     marginTop: 5,
//     marginHorizontal: 10,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//   },
//   text: {
//     fontSize: 18,
//     margin: 10,
//     borderRadius: 5,
//   },
// });
