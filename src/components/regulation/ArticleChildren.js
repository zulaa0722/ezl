import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { selectArticlesChildren } from "../../helpers/dbRegulation";
import ArticleChild from "./ArticleChild";

const ArticleChildren = (props) => {
  const [articleChildren, setArticleChildren] = useState([]);
  const [childHide, setchildHide] = useState(false);

  const getArticleChildren = (id) => {};

  useEffect(() => {
    // if (props.getClickParentID == props.data.item.parentID) {
    //   console.log(props.getClickParentID);
    //   if (childHide == false) {
    //     setchildHide(true);
    //   } else {
    //     setchildHide(false);
    //   }
    // }
  }, []);

  // const navigateReading = (id) => {
  //   props.navigateTo(id);
  // };
  if (props.data.item.parentID == 0) {
    useEffect(() => {
      selectArticlesChildren(props.data.item.id)
        .then((res) => {
          setArticleChildren(res._array);
          console.log(res._array);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  }

  //   console.log(props.isClick);
  if (props.getClickParentID == props.data.item.parentID) {
    props.hiddenSubChildren(props.data.item.parentID);
  }

  return (
    <>
      {props.getClickParentID == props.data.item.parentID && (
        <ArticleChild
          navigateTo={props.navigateTo}
          data={props.data}
          areYouHaveChild={props.areYouHaveChild}
        />
      )}
    </>
  );
};
// getArticleChildren(data.item.parentID);
// console.log(articleChildren);
// articleChildren.map((item) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         // navigateReading(data.item.id);
//       }}
//       style={myStyle.btnStyleElse}
//     >
//       <View style={myStyle.wrapperElse}>
//         <Text style={myStyle.text}>
//           {item.childName} {item.parentID}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// });
export default ArticleChildren;

const styles = StyleSheet.create({
  btnStyleElse: {
    marginTop: 5,
  },
  wrapperElse: {
    //flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 40,
    marginHorizontal: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    margin: 10,
    // width: "90%",
    borderRadius: 5,
    // backgroundColor: "#fff",
  },
});
