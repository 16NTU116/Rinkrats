import React, { useState, useEffect, useContext } from "react";
import {
     View,
     StyleSheet,
     Switch,
     SafeAreaView,
     TouchableOpacity,
     Text,
     Image,
     ImageBackground,
     ScrollView,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import {
     SCREEN_HEIGHT,
     IMAGEBACK,
     SCREEN_WIDTH,
     PROFILE,
     SCHBG,
     OPENBG,
     PROFILE2,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";

const Position = (props) => {
     const [checked, setChecked] = useState("");
     const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
                              justifyContent: "space-between",
                              marginHorizontal: 12,
                              paddingBottom: 14,
                         }}
                    >
                         <View
                              style={{
                                   flexDirection: "row",
                                   alignItems: "center",
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
                                   Position
                              </Text>
                         </View>
                    </View>
                    <View
                         style={{
                              backgroundColor: Colors.screenbackground,
                              height: SCREEN_HEIGHT,
                         }}
                    >
                         <TouchableOpacity
                              onPress={() => {
                                   setChecked("rightWing");
                              }}
                              style={{
                                   width: "90%",
                                   borderWidth: checked === "rightWing" ? 1 : 0,
                                   borderColor: "#40D9E3",
                                   alignSelf: "center",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   paddingVertical: 14,
                                   marginTop: 20,
                                   backgroundColor:
                                        checked === "rightWing"
                                             ? "#E5FAFB"
                                             : "white",
                              }}
                         >
                              <Text
                                   style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                   }}
                              >
                                   Right Wing
                              </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   setChecked("leftWing");
                              }}
                              style={{
                                   width: "90%",
                                   borderWidth: checked === "leftWing" ? 1 : 0,
                                   borderColor: "#40D9E3",
                                   alignSelf: "center",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   paddingVertical: 14,
                                   marginTop: 20,
                                   backgroundColor:
                                        checked === "leftWing"
                                             ? "#E5FAFB"
                                             : "white",
                              }}
                         >
                              <Text
                                   style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                   }}
                              >
                                   Left Wing
                              </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   setChecked("center");
                              }}
                              style={{
                                   width: "90%",
                                   borderWidth: checked === "center" ? 1 : 0,
                                   borderColor: "#40D9E3",
                                   alignSelf: "center",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   paddingVertical: 14,
                                   marginTop: 20,
                                   backgroundColor:
                                        checked === "center"
                                             ? "#E5FAFB"
                                             : "white",
                              }}
                         >
                              <Text
                                   style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                   }}
                              >
                                   Center
                              </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   setChecked("leftDefence");
                              }}
                              style={{
                                   width: "90%",
                                   borderWidth:
                                        checked === "leftDefence" ? 1 : 0,
                                   borderColor: "#40D9E3",
                                   alignSelf: "center",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   paddingVertical: 14,
                                   marginTop: 20,
                                   backgroundColor:
                                        checked === "leftDefence"
                                             ? "#E5FAFB"
                                             : "white",
                              }}
                         >
                              <Text
                                   style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                   }}
                              >
                                   Left Defence
                              </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   setChecked("rightDefence");
                              }}
                              style={{
                                   width: "90%",
                                   borderWidth:
                                        checked === "rightDefence" ? 1 : 0,
                                   borderColor: "#40D9E3",
                                   alignSelf: "center",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   paddingVertical: 14,
                                   marginTop: 20,
                                   backgroundColor:
                                        checked === "rightDefence"
                                             ? "#E5FAFB"
                                             : "white",
                              }}
                         >
                              <Text
                                   style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                   }}
                              >
                                   Right Defence
                              </Text>
                         </TouchableOpacity>

                         <TouchableOpacity
                              onPress={() => {
                                   setChecked("goalie");
                              }}
                              style={{
                                   width: "90%",
                                   borderWidth: checked === "goalie" ? 1 : 0,
                                   borderColor: "#40D9E3",
                                   alignSelf: "center",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   paddingVertical: 14,
                                   marginTop: 20,
                                   backgroundColor:
                                        checked === "goalie"
                                             ? "#E5FAFB"
                                             : "white",
                              }}
                         >
                              <Text
                                   style={{
                                        color: "black",
                                        fontSize: 15,
                                        fontWeight: "bold",
                                   }}
                              >
                                   Goalie
                              </Text>
                         </TouchableOpacity>
                         <View style={{ height: 50 }} />
                         <TouchableOpacity
                              style={{
                                   alignItems: "center",
                                   alignSelf: "center",
                                   backgroundColor: "white",
                                   marginHorizontal: 20,
                                   borderRadius: 2,
                                   width: SCREEN_WIDTH * 0.9,
                                   marginTop: normalize(16),
                                   padding: 16,
                                   borderWidth: 1,
                                   borderColor: "black",
                              }}
                              onPress={
                                   () => props.navigation.goBack()
                                   // props.navigation.navigate("PasswordUpdated")
                              }
                         >
                              <Text
                                   style={{
                                        fontFamily: "Nunito",
                                        fontSize: 16,
                                        color: "black",
                                   }}
                              >
                                   CANCEL
                              </Text>
                         </TouchableOpacity>
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
                              onPress={
                                   () => props.navigation.goBack()
                                   // props.navigation.navigate("PasswordUpdated")
                              }
                         >
                              <Text
                                   style={{
                                        fontFamily: "Nunito",
                                        fontSize: 16,
                                        color: "white",
                                   }}
                              >
                                   DONE
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
          backgroundColor: "white",
     },
});
export default Position;
