import Slider from "react-native-slider";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Audio } from "expo-av";

const SliderSound = (props) => {
  const [sliderVal, setSliderVal] = useState(0.2);
  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    LoadAudio();
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          songLists[props.id - 1].uri,
          {},
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  return (
    <View>
      <View style={styles.groupBtn}>
        <TouchableOpacity
          style={styles.playBtn}
          onPress={() => {
            PlayAudio();
          }}
        >
          <Text style={styles.playTxt}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playBtn}
          onPress={() => {
            PauseAudio();
          }}
        >
          <Text style={styles.playTxt}>Pause</Text>
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
    marginLeft: 5,
  },
  playTxt: {
    color: "black",
  },
});

const songLists = [
  {
    id: 1,
    uri: require("../../../../assets/images/raw/bosoh.mp3"),
  },
  {
    id: 2,
    uri: require("../../../../assets/images/raw/hicheel_ehel.mp3"),
  },
  {
    id: 3,
    uri: require("../../../../assets/images/raw/hoolondoo.mp3"),
  },
  {
    id: 4,
    uri: require("../../../../assets/images/raw/jags.mp3"),
  },
  {
    id: 5,
    uri: require("../../../../assets/images/raw/tuya.mp3"),
  },
  {
    id: 6,
    uri: require("../../../../assets/images/raw/togsgol.mp3"),
  },
  {
    id: 7,
    uri: require("../../../../assets/images/raw/anhaar.mp3"),
  },
  {
    id: 8,
    uri: require("../../../../assets/images/raw/tsuglar.mp3"),
  },
  {
    id: 9,
    uri: require("../../../../assets/images/raw/zaki_tsuglar.mp3"),
  },
  {
    id: 10,
    uri: require("../../../../assets/images/raw/fire.mp3"),
  },
  {
    id: 11,
    uri: require("../../../../assets/images/raw/tugshuur.mp3"),
  },
  {
    id: 12,
    uri: require("../../../../assets/images/raw/haruuld_alhaad_march.mp3"),
  },
  {
    id: 13,
    uri: require("../../../../assets/images/raw/tugiin_dor.mp3"),
  },
  {
    id: 14,
    uri: require("../../../../assets/images/raw/haruuld_alhaad_march.mp3"),
  },
  {
    id: 15,
    uri: require("../../../../assets/images/raw/ayni_march1.mp3"),
  },
  {
    id: 16,
    uri: require("../../../../assets/images/raw/ayni_march_2.mp3"),
  },
  {
    id: 17,
    uri: require("../../../../assets/images/raw/tugshuur.mp3"),
  },
];
