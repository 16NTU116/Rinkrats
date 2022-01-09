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
} from "react-native";
import Colors from "../../utils/colors";
import { TextInput } from "react-native-paper";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";

import { RadioButton } from "react-native-paper";

import {
     SCREEN_HEIGHT,
     GOLDCOINSIMPLE,
     COINBG,
     MASTERCARD,
     SCREEN_WIDTH,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import AuthText from "../../components/AuthText";

const Experience = (props) => {
     const [checked, setChecked] = React.useState("first");

     const [gameWithPros, setGameWithPros] = useState("");
     const [gameWithMinors, setGameWithMinors] = useState("");
     const [ageStarted, setAgeStarted] = useState("");
     const [years, setYears] = useState("");
     const [consecutiveYears, setConsecutiveYears] = useState("");
     useEffect(async () => {
          console.log("new hello");
     });

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView>
                    <View
                         style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginHorizontal: 12,
                              paddingBottom: 14,
                         }}
                    >
                         <TouchableOpacity
                              onPress={() => props.navigation.goBack()}
                         >
                              <Ionicons
                                   name="ios-arrow-back-outline"
                                   color="black"
                                   size={20}
                              />
                         </TouchableOpacity>
                         <Text
                              style={{
                                   fontSize: 16,
                                   fontWeight: "700",
                                   paddingLeft: 12,
                              }}
                         >
                              Experience
                         </Text>
                    </View>
                    <View
                         style={{
                              position: "relative",
                              marginHorizontal: 21,
                              marginTop: 13,
                         }}
                    >
                         <TextInput
                              label="Game played with pros"
                              value={gameWithPros}
                              mode="outlined"
                              onChangeText={(text) => setGameWithPros(text)}
                         />
                         <TextInput
                              label="Game played with minors"
                              value={gameWithMinors}
                              mode="outlined"
                              onChangeText={(text) => setGameWithMinors(text)}
                              style={{ marginTop: 10 }}
                         />
                         <TextInput
                              label="Game played with pros"
                              value={ageStarted}
                              mode="outlined"
                              onChangeText={(text) => setAgeStarted(text)}
                              style={{ marginTop: 10 }}
                         />
                         <TextInput
                              label="Game played with pros"
                              value={years}
                              mode="outlined"
                              onChangeText={(text) => setYears(text)}
                              style={{ marginTop: 10 }}
                         />
                         <TextInput
                              label="Game played with pros"
                              value={consecutiveYears}
                              mode="outlined"
                              onChangeText={(text) => setConsecutiveYears(text)}
                              style={{ marginTop: 10 }}
                         />
                         <Text
                              style={{
                                   marginTop: 36,
                                   color: "#8F959D",
                                   marginBottom: 23,
                              }}
                         >
                              Last game played
                         </Text>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Mite</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="first"
                                   status={
                                        checked === "first"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("first")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Squirt</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="second"
                                   status={
                                        checked === "second"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("second")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Peewee</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="third"
                                   status={
                                        checked === "third"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("third")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Bantam</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="fourth"
                                   status={
                                        checked === "fourth"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("fourth")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>
                                   Midget minor - 15 & under
                              </Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="fifth"
                                   status={
                                        checked === "fifth"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("fifth")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>
                                   Midget minor - 16 & under
                              </Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="sixth"
                                   status={
                                        checked === "sixth"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("sixth")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>High School</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="seventh"
                                   status={
                                        checked === "seventh"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("seventh")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   marginTop: 7,
                                   justifyContent: "space-between",
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Junior</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="eigth"
                                   status={
                                        checked === "eigth"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("eigth")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>College</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="ninth"
                                   status={
                                        checked === "ninth"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("ninth")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Semi Pro</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="tenth"
                                   status={
                                        checked === "tenth"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("tenth")}
                              />
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   marginTop: 7,
                              }}
                         >
                              <Text style={{ fontSize: 16 }}>Pro</Text>
                              <RadioButton
                                   color={"#00B4BF"}
                                   value="eleventh"
                                   status={
                                        checked === "eleventh"
                                             ? "checked"
                                             : "unchecked"
                                   }
                                   onPress={() => setChecked("eleventh")}
                              />
                         </View>
                         <TouchableOpacity
                              style={{
                                   alignItems: "center",
                                   alignSelf: "center",
                                   backgroundColor: "#D7DCE2",
                                   marginHorizontal: 20,
                                   borderRadius: 2,
                                   width: SCREEN_WIDTH * 0.9,
                                   marginTop: normalize(16),
                                   padding: 16,
                              }}
                              onPress={
                                   () => props.navigation.goBack()
                                   //    props.navigation.navigate("PasswordUpdated")
                              }
                         >
                              <Text
                                   style={{
                                        fontFamily: "Nunito",
                                        fontSize: 16,
                                        color: Colors.textColorDullHome,
                                   }}
                              >
                                   UPDATE
                              </Text>
                         </TouchableOpacity>
                    </View>
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
export default Experience;
