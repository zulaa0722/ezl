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
        <View style={styles.imgBck}>
          <Image
            style={styles.imageStyleShuu}
            source={require("../../../../assets/images/raw/e_neg.png")}
          />
        </View>
      )}
      {props.route.params.id == 2 && (
        <>
          <Image
            style={{ width: "100%", height: "7%" }}
            source={require("../../../../assets/images/raw/e_hoer.png")}
          />
        </>
      )}
      {props.route.params.id == 3 && (
        <>
          <Image
            style={{ width: "100%", height: "7%" }}
            source={require("../../../../assets/images/raw/e_gurav.png")}
          />
        </>
      )}
      {props.route.params.id == 4 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/e_duruv.png")}
          />
        </>
      )}
      {props.route.params.id == 5 && (
        <>
          <Image
            style={{ width: "100%", height: "23%" }}
            source={require("../../../../assets/images/raw/e_tav.png")}
          />
        </>
      )}

      {props.route.params.id == 6 && (
        <>
          <Image
            style={{ width: "100%", height: "7%" }}
            source={require("../../../../assets/images/raw/e_zurgaa.png")}
          />
        </>
      )}
      {props.route.params.id == 7 && (
        <>
          <Image
            style={{ width: "100%", height: "7%" }}
            source={require("../../../../assets/images/raw/e_zurgaa.png")}
          />
        </>
      )}
      {props.route.params.id == 8 && (
        <>
          <Image
            style={{ width: "100%", height: "16%" }}
            source={require("../../../../assets/images/raw/e_naim.png")}
          />
        </>
      )}
      {props.route.params.id == 9 && (
        <>
          <Image
            style={{ width: "100%", height: "7%" }}
            source={require("../../../../assets/images/raw/e_ec.png")}
          />
        </>
      )}
      {props.route.params.id == 10 && (
        <>
          <Image
            style={{ width: "100%", height: "9%" }}
            source={require("../../../../assets/images/raw/e_arav.png")}
          />
        </>
      )}
      {props.route.params.id == 11 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/e_arvanneg.png")}
          />
        </>
      )}
      {props.route.params.id == 12 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/e_arvanhoer.png")}
          />
        </>
      )}

      {props.route.params.id == 13 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/b_neg.png")}
          />
        </>
      )}
      {props.route.params.id == 14 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/b_hoer.png")}
          />
        </>
      )}
      {props.route.params.id == 15 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/b_gurav.png")}
          />
        </>
      )}
      {props.route.params.id == 16 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/b_duruv.png")}
          />
        </>
      )}
      {props.route.params.id == 17 && (
        <>
          <Image
            style={{ width: "100%", height: "15%" }}
            source={require("../../../../assets/images/raw/b_tav.png")}
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
  imgBck: {
    flex: 1,
    width: "100%",
  },
  imageStyleShuu: {
    // flex: 1,
    width: "100%",
    height: "70%",
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
