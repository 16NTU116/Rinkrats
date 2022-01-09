import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import Colors from "../../utils/colors";
import { TextInput } from "react-native-paper";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { AirbnbRating } from "react-native-ratings";
import jwt_decode from "jwt-decode";
import {
  SCREEN_HEIGHT,
  GOLDCOINSIMPLE,
  COINBG,
  MASTERCARD,
  SCREEN_WIDTH,
  THUMB,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import AuthText from "../../components/AuthText";
import SkillsMonitor from "../../components/SkillsMonitor";
var tick = require("../../../assets/icons/tick.png");

const YourSkills = (props) => {
  const [beginner, setBeginner] = useState(true);
  const [intermediate, setIntermediate] = useState(false);
  const [pro, setPro] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            paddingBottom: 14,
            paddingTop: 14,
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back-outline" color="black" size={20} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              paddingLeft: 12,
            }}
          >
            Update your skills
          </Text>
        </View>
        <ScrollView style={{ width: "100%", height: SCREEN_HEIGHT * 0.82 }}>
          <FlatList
            data={[
              { title: "Acceleration" },
              { title: "Speed" },
              { title: "Agility" },
              { title: "Crossovers" },
              { title: "Turn acceleration" },
              { title: "Controlled skating" },
              { title: "Change of pace" },
            ]}
            style={{
              marginVertical: 10,
            }}
            key={"_"}
            ListHeaderComponent={() => (
              <View style={{ paddingVertical: 5, marginHorizontal: "5%" }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#8F959D",
                    textTransform: "uppercase",
                  }}
                >
                  SKATING
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return <SkillsMonitor title={item.title} />;
            }}
          />
          <FlatList
            data={[
              { title: "Accuracy" },
              { title: "Hard/Flat" },
              { title: "Makes play" },
              { title: "Backhand passes" },
              { title: "Good first pass" },
            ]}
            style={{
              marginVertical: 10,
            }}
            key={"_"}
            ListHeaderComponent={() => (
              <View style={{ paddingVertical: 5, marginHorizontal: "5%" }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#8F959D",
                    textTransform: "uppercase",
                  }}
                >
                  Passing
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return <SkillsMonitor title={item.title} />;
            }}
          />
          <FlatList
            data={[
              { title: "Acceleration" },
              { title: "Speed" },
              { title: "Agility" },
              { title: "Crossovers" },
              { title: "Turn acceleration" },
              { title: "Controlled skating" },
              { title: "Change of pace" },
            ]}
            style={{
              marginVertical: 10,
            }}
            key={"_"}
            ListHeaderComponent={() => (
              <View style={{ paddingVertical: 5, marginHorizontal: "5%" }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#8F959D",
                    textTransform: "uppercase",
                  }}
                >
                  receiving
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return <SkillsMonitor title={item.title} />;
            }}
          />
          <FlatList
            data={[
              { title: "Acceleration" },
              { title: "Speed" },
              { title: "Agility" },
              { title: "Crossovers" },
              { title: "Turn acceleration" },
              { title: "Controlled skating" },
              { title: "Change of pace" },
            ]}
            style={{
              marginVertical: 10,
            }}
            key={"_"}
            ListHeaderComponent={() => (
              <View style={{ paddingVertical: 5, marginHorizontal: "5%" }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#8F959D",
                    textTransform: "uppercase",
                  }}
                >
                  checking skills
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return <SkillsMonitor title={item.title} />;
            }}
          />
        </ScrollView>
        <TouchableOpacity
          style={{
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#DD0000",
            marginHorizontal: 20,
            borderRadius: 2,
            width: SCREEN_WIDTH * 0.9,
            marginTop: normalize(16),
            padding: 16,
          }}
          onPress={() =>
            props.navigation.navigate("RefundRequest", {
              title: "Role",
              message: "Seems you are a pro forward player",
              image: THUMB,
              btn: true,
              btnText: "continue to payment",
              screen: "SelectPaymentModes",
            })
          }
        >
          <Text
            style={{
              fontFamily: "Nunito",
              fontSize: 16,
              color: "white",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },
});
export default YourSkills;
