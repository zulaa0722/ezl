import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import HTMLView from "react-native-htmlview";
import axios from "../../axios/axios-purchase";
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const RegulationReadingScreen = (props) => {
  const [laws, setLaws] = useState([]);
  const [search, setSearch] = useState("");
  // const [changedVal, setChangedVal] = useState("");
  // const [masterDataSource, setMasterDataSource] = useState("");
  // const myRef = useRef();
  const [body, setBody] = useState("");
  const [indexCount, setIndexCount] = useState(0);
  const [getText, setGetText] = useState("");
  // const [inputRef, setInputFocus] = useFocus();
  const focusDiv = useRef();
  const [focusTuts, setFocusTuts] = useState(false);

  const regex = /<br|\n|\r\s*\\?>/g;
  const isCheckV = /[`~a-w!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
  let injectScript = "";
  useEffect(() => {
    axios
      .post("/get/discipline/law", {
        id: props.route.params.id,
      })
      .then((response) => {
        setLaws(response.data);
      })
      .catch();
  }, []);

  useEffect(() => {
    injectScript = `document.querySelector('#myInput').focus();`;

    // scrollToRef(focusDiv);
    // injectScript = `
    //   document.getElementById("myInput").addEventListener("focus", function() {
    //    var data = {
    //   type: "OnFocusEvent",
    //   message : "OnFocusEvent"
    //  };
    //   window.postMessage(JSON.stringify({data}),"*");
    //     });
    //   `;
  }, [serachBtn]);

  // var arr = laws[0];
  if (laws.length == 0) {
    return (
      <HTMLView
        value={"<div }>Мэдээлэл байхгүй байна.</div>"}
        stylesheet={styles}
      />
    );
  }
  const searchFilterFunction = (text) => {
    if (text) {
      setIndexCount("");
      // var regex123 = new RegExp("\\b" + text + "\\b", "g");
      setGetText(text);
      text = text.replace(isCheckV, "");
      var innerHTML = laws.law
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => {
          return c.toUpperCase();
        });
      var index = innerHTML.indexOf(
        text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => {
          return c.toUpperCase();
        })
      );
      if (index >= 0) {
        setBody(innerHTML);
      } else {
        setBody("");
      }
      setSearch(text);
    } else {
      setSearch(text);
      setBody("");
    }
  };
  const serachBtn = () => {
    var innerHTMLSorce = "";
    innerHTMLSorce = laws.law
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => {
        return c.toUpperCase();
      });

    let myRegex = new RegExp(
      `${getText.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => {
        return c.toUpperCase();
      })}`,
      "gi"
    );
    let result,
      indices = [];
    while ((result = myRegex.exec(innerHTMLSorce))) {
      indices.push(result.index);
    }
    setIndexCount(indices.length);
    var defaultNumber = 33;
    for (var i = 0; i < indices.length; i++) {
      console.log(indices[i]);
      if (i == 0) {
        innerHTMLSorce =
          innerHTMLSorce.substring(0, indices[i]) +
          "<davka class='highlight'>" +
          innerHTMLSorce.substring(indices[i], indices[i] + getText.length) +
          "</davka>" +
          innerHTMLSorce.substring(indices[i] + getText.length);
      } else {
        innerHTMLSorce =
          innerHTMLSorce.substring(0, indices[i] + defaultNumber * i) +
          "<davka class='highlight'>" +
          innerHTMLSorce.substring(
            indices[i] + defaultNumber * i,
            indices[i] + defaultNumber * i + getText.length
          ) +
          "</davka>" +
          innerHTMLSorce.substring(
            indices[i] + defaultNumber * i + getText.length
          );
      }
    }
    setBody(innerHTMLSorce);
  };

  return (
    <>
      <View style={styles.rowView}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Хайх"
        />
        {indexCount != 0 ? (
          <Text style={styles.countStyle}>
            {indexCount} / {indexCount}
          </Text>
        ) : (
          <Text style={styles.countStyle}></Text>
        )}

        <TouchableOpacity style={styles.btn} onPress={serachBtn}>
          <Text style={styles.text}>Хайх</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          padding: 5,
          paddingRight: 10,
        }}
        keyboardShouldPersistTaps="always"
        // keyboardDismissMode={"interactive"}
        keyboardDismissMode="on-drag"
        keyboardDisplayRequiresUserAction={true} //ios
        autoFocus={true} //android
        injectedJavaScript={injectScript}
        automaticallyAdjustContentInsets={false}
        allowFileAccessFromFileURLs={true}
        scalesPageToFit={false}
        mixedContentMode={"always"}
        javaScriptEnabled={true}
        javaScriptEnabledAndroid={true}
        startInLoadingState={true}
      >
        {search == "" ? (
          <HTMLView
            value={"<div >" + laws.law.trim().replace(regex, "") + "</div>"}
            stylesheet={styles}
          />
        ) : (
          <>
            <HTMLView
              value={"<div>" + body.trim().replace(regex, "") + "</div>"}
              stylesheet={styles}
              keyboardDisplayRequiresUserAction={true} //ios
              autoFocus={true} //android
              injectedJavaScript={injectScript}
              automaticallyAdjustContentInsets={false}
              allowFileAccessFromFileURLs={true}
              scalesPageToFit={false}
              mixedContentMode={"always"}
              javaScriptEnabled={true}
              javaScriptEnabledAndroid={true}
              startInLoadingState={true}
            />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default RegulationReadingScreen;

const styles = StyleSheet.create({
  div: {
    paddingBottom: 12,
  },
  p: {
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingTop: 0,
    textAlign: "justify",
  },
  a: {
    fontWeight: "500",
  },
  textInputStyle: {
    height: 25,
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
    flex: 0.6,
    borderRadius: 5,
  },
  highlight: {
    backgroundColor: "yellow",
    focus: true,
  },
  spam: {
    highlight: {
      backgroundColor: "yellow",
    },
  },
  davka: { color: "green", backgroundColor: "yellow", focus: true },
  rowView: {
    flexDirection: "row",
    height: 30,
    padding: 5,
  },
  btn: {
    height: 25,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
    backgroundColor: "green",
    marginLeft: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  countStyle: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flex: 0.2,
    marginLeft: 5,
    marginBottom: 5,
    borderRadius: 5,
    paddingTop: 6,
  },
});
//
