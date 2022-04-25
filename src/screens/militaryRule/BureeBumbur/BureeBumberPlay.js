import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  WebView,
  Button,
} from "react-native";
import React, { useEffect } from "react";
// import { AudioPlayer } from "react-native-simple-audio-player";
// import { Audio } from "expo-av";
// import SoundPlayer from "react-native-sound-player";
// import { AudioPlayer } from "react-native-simple-audio-player";
// import mp3Url from "../../../../assets/images/raw/hicheel_ehel.mp3";
// import SoundPlayer from "react-native-sound-player";

const BureeBumberPlay = (props) => {
  const [sound, setSound] = React.useState();
  // async function playSound() {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../../../../assets/images/raw/hicheel_ehel.mp3")
  //   );
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);
  // const play = () => {
  //   try {
  //     // play the file tone.mp3
  //     SoundPlayer.playSoundFile("tone", "mp3");
  //     // or play from url
  //     SoundPlayer.playUrl("../../../../assets/images/raw/hicheel_ehel.mp3");
  //   } catch (e) {
  //     console.log(`cannot play the sound file`, e);
  //   }
  // };

  return (
    <View style={styles.bodyStyle}>
      <View style={styles.headerRow}>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/icons/buree_png.png")}
        />
        <Text style={styles.line}> </Text>

        <Text style={styles.text}> {props.route.params.type}</Text>

        {/* </LinearGradient> */}
      </View>
      <Text style={styles.headerTxt}>{props.route.params.name}</Text>
      {props.route.params.id == 1 && (
        <>
          <Image
            style={styles.imageStyleShuu}
            source={require("../../../../assets/images/raw/e_neg.png")}
          />
        </>
      )}
      {/* <AudioPlayer url={"https://gsmaf.gov.mn/1/mp3/negdelt_buree.mp3"} /> */}
      {/* <WebView
        source={{
          uri: "https://gsmaf.gov.mn/1/mp3/negdelt_buree.mp3",
        }}
      /> */}

      {/* <Button title="Play Sound" onPress={playSound} /> */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#313131",
          justifyContent: "center",
        }}
      >
        {/* <AudioPlayer
          url={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}
        /> */}
      </View>
    </View>
  );
};

export default BureeBumberPlay;

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: "center",
  },
  headerRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    width: "100%",
    backgroundColor: "green",
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    color: "#fff",
    padding: 2,
  },
  rowText: {
    color: "black",
  },
  line: {
    width: 1,
    backgroundColor: "#fff",
    // backgroundColor: "#f0c418",
    marginRight: 3,
    height: "100%",
  },
  image: {
    marginRight: 10,
    marginLeft: 5,
    width: 70,
    height: 30,
    justifyContent: "center",
  },
  imageStyleShuu: {
    // textAlign: "center",
    width: "100%",
    height: "35%",
    // flex: 1,
  },
  headerTxt: {
    textAlign: "center",
    fontSize: 16,
    padding: 5,
  },
  listBtn: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
    height: 60,
    backgroundColor: "green",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
});
