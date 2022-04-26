import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Audio } from "expo-av";

const TestSound = () => {
  const [sound, setSound] = React.useState();
  const playSong = async () => {
    console.log("Loading Sound");
    const { sound, status } = await Audio.Sound.createAsync(
      require(`../../../../assets/images/raw/anhaar.mp3`),
      { shouldPlay: true },
      (status1) => console.log(status1.positionMilis)
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
    sound
      .getStatusAsync()
      .then(function (result) {
        console.log(result.durationMillis);
      })
      .catch(failureCallback);
  };
  return (
    <TouchableOpacity onPress={playSong}>
      <View>
        <Text>TestSound</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TestSound;

const styles = StyleSheet.create({});
