import Slider from "react-native-slider";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SliderSound = () => {
  const [sliderVal, setSliderVal] = useState(0.2);
  return (
    <View>
      <Slider
        value={sliderVal}
        onValueChange={(sliderVal) => setSliderVal(sliderVal)}
      />
      <View style={styles.groupBtn}>
        <TouchableOpacity
          style={styles.playBtn}
          onPress={() => {
            //   clickOnRow(el.id);
          }}
        >
          <Text style={styles.playTxt}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playBtn}
          onPress={() => {
            //   clickOnRow(el.id);
          }}
        >
          <Text style={styles.playTxt}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playBtn}
          onPress={() => {
            //   clickOnRow(el.id);
          }}
        >
          <Text style={styles.playTxt}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SliderSound;

const styles = StyleSheet.create({
  groupBtn: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  playBtn: {
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 5,
    color: "green",
    padding: 5,
    width: 80,
    alignItems: "center",
  },
  playTxt: {
    color: "black",
  },
});
