import React, { useEffect, useState } from "react";
// Import required components
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

const RegulationExtendableComp = ({ item, onClickFunction }) => {
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
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <Text style={styles.headerText}>{item.category_name} bla</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert("Id: " + item.id + " val: " + item.val)}
          >
            <Text style={styles.text}>
              {key}. {item.val}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
