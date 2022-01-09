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
import {
     SCREEN_HEIGHT,
     GOLDCOINSIMPLE,
     COINBG,
     MASTERCARD,
     SCREEN_WIDTH,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import AuthText from "../../components/AuthText";
var tick = require("../../../assets/icons/tick.png");

const RoleTypes = (props) => {
     const [player, setPlayer] = useState(false);
     const [captain, setCaptain] = useState(false);
     const [leagueManager, setLeagueManager] = useState(false);
     const [scoreKeeper, setScoreKeeper] = useState(false);
     const [cordinator, setCordinator] = useState(false);
     const [coach, setCoach] = useState(false);
     const [subCordinator, setSubCordinator] = useState(false);
     const [referee, setReferee] = useState(false);
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
                              Role Type
                         </Text>
                    </View>
                    <View
                         style={{
                              position: "relative",
                              marginHorizontal: 21,
                              marginTop: 30,
                         }}
                    >
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Player
                              </Text>

                              <TouchableOpacity
                                   onPress={() => setPlayer(!player)}
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !player
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {player && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Captain
                              </Text>

                              <TouchableOpacity
                                   onPress={() => setCaptain(!captain)}
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !captain
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {captain && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   League Manager
                              </Text>

                              <TouchableOpacity
                                   onPress={() =>
                                        setLeagueManager(!leagueManager)
                                   }
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !leagueManager
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {leagueManager && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Scorekeeper
                              </Text>

                              <TouchableOpacity
                                   onPress={() => setScoreKeeper(!scoreKeeper)}
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !player
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {scoreKeeper && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Tournament Cordinator
                              </Text>

                              <TouchableOpacity
                                   onPress={() => setCordinator(!cordinator)}
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !cordinator
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {cordinator && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Coach
                              </Text>

                              <TouchableOpacity
                                   onPress={() => setCoach(!coach)}
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !coach
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {coach && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Subcontractor
                              </Text>

                              <TouchableOpacity
                                   onPress={() =>
                                        setSubCordinator(!subCordinator)
                                   }
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !player
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {subCordinator && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
                         <View
                              style={{
                                   flexDirection: "row",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   marginBottom: 26,
                              }}
                         >
                              <Text
                                   style={{
                                        fontSize: 16,
                                        fontWeight: "400",
                                   }}
                              >
                                   Referee
                              </Text>

                              <TouchableOpacity
                                   onPress={() => setReferee(!referee)}
                              >
                                   <View
                                        style={{
                                             height: 20,
                                             width: 20,
                                             borderRadius: 5,
                                             borderWidth: 1,
                                             borderColor: !player
                                                  ? "gray"
                                                  : "#00B4BF",
                                             alignItems: "center",
                                        }}
                                   >
                                        {referee && (
                                             <Image
                                                  source={tick}
                                                  style={{
                                                       width: 15,
                                                       height: 15,
                                                  }}
                                             />
                                        )}
                                   </View>
                              </TouchableOpacity>
                         </View>
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
          backgroundColor: Colors.screenbackground,
     },
});
export default RoleTypes;
