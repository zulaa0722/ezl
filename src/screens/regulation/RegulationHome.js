import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
// import * as SQLite  from 'expo-sqlite'

import RegulationNames from "../../components/regulation/RegulationTop";
import { selectLawTypes } from "../../helpers/dbRegulation";
import RegulationBottom from "../../components/regulation/RegulationBottom";
import ExtendableComp from "../../components/regulation/RegulationExtendableComp";

const RegulationHome = (props) => {
  const [ids, setID] = useState("");
  const [lawTypes, setLawTypes] = useState([]);
  const [articles, setArticles] = useState(false);

  // console.log("regHome:  " + props);
  useEffect(() => {
    selectLawTypes("1")
      .then((res) => {
        setLawTypes(res._array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigateTo = (id) => {
    // console.log("navigate to hh=" + id);
    props.navigation.navigate("regulationReading", { id: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <FlatList
          style={styles.flatlist}
          horizontal={true}
          data={lawTypes}
          keyExtractor={lawTypes.id}
          renderItem={(data) => (
            <RegulationNames
              names={data.item.lawName}
              ids={data.item.lawID}
              setIDS={setID}
            />
          )}
        />
      </View>
      <View style={styles.bottomView}>
        {articles ? (
          <ExtendableComp />
        ) : (
          <RegulationBottom ids={ids} navigateTo={navigateTo} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default RegulationHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D68A",
  },
  flatlist: {},
  topView: {
    flex: 0.4,
    // justifyContent: "center",
    // alignItems: "center",
    //
  },
  bottomView: {
    flex: 0.6,
    backgroundColor: "#51E1ED",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    // alignItems: "center",
  },
});
