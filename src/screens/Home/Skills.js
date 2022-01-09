import React, { useState, useEffect, useContext } from "react";
import {
     View,
     StyleSheet,
     Image,
     SafeAreaView,
     TouchableOpacity,
     Text,
     FlatList,
     ImageBackground,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
     GOLDCOINSIMPLE,
     STAR,
     SCREEN_WIDTH,
     SCREEN_HEIGHT,
     COINBG,
     GOLDCOIN,
     DARKCOIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import HorizontalLine from "../../components/HorizontalLine";

const Skills = (props) => {
     const [name, setName] = useState(null);
     const [password, setPassword] = useState(null);
     const [signup, setSignup] = useState(true);
     const [showPuck, setShowPuck] = useState(false);
     useEffect(async () => {
          console.log("new hello");
     });

     return (
          <SafeAreaView style={styles.container}>
               <View
                    style={{
                         marginHorizontal: 12,
                         paddingBottom: 14,
                         flexDirection: "row",
                         justifyContent: "space-between",
                    }}
               >
                    <View
                         style={{ flexDirection: "row", alignItems: "center" }}
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
                              Skills
                         </Text>
                    </View>
               </View>
               <ImageBackground
                    source={COINBG}
                    resizeMode="cover"
                    style={{ width: "100%", height: normalize(182) }}
               >
                    <View
                         style={{
                              alignItems: "center",
                         }}
                    >
                         <Image source={STAR} style={{ marginTop: 44 }} />
                         <Text
                              style={{
                                   color: "white",
                                   fontWeight: "700",
                                   fontSize: 20,
                                   marginTop: 10,
                              }}
                         >
                              4.5/5
                         </Text>
                         <Text style={{ color: Colors.notiTextColor }}>
                              Your average rating
                         </Text>
                    </View>
               </ImageBackground>
               <View
                    style={{
                         backgroundColor: Colors.prim3,
                         paddingVertical: 10,
                         alignItems: "center",
                    }}
               ></View>
               <View
                    style={{
                         flexDirection: "row",
                         justifyContent: "space-between",
                         marginTop: 16,
                         marginHorizontal: 8,
                    }}
               >
                    <TouchableOpacity
                         style={{
                              backgroundColor: "white",
                              alignItems: "center",
                              shadowColor: "black",
                              shadowOffset: { width: 1, height: 1 },
                              shadowRadius: 1,
                              elevation: 8,
                              width: SCREEN_WIDTH / 2.15,
                              paddingVertical: 22,
                              paddingHorizontal: 32,
                         }}
                         onPress={() =>
                              props.navigation.navigate("RateYourself")
                         }
                    >
                         <Image
                              source={require("../../../assets/icons/usercheck.png")}
                         />
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "700",
                                   paddingTop: 5,
                              }}
                         >
                              4.6/5
                         </Text>
                         <Text
                              style={{
                                   fontSize: 14,
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Rate yourself
                         </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{
                              backgroundColor: "white",
                              alignItems: "center",
                              shadowColor: "black",
                              shadowOffset: { width: 1, height: 1 },
                              shadowRadius: 1,
                              elevation: 8,
                              width: SCREEN_WIDTH / 2.15,
                              paddingVertical: 22,
                              paddingHorizontal: 32,
                         }}
                         onPress={() => props.navigation.navigate("YourLevel")}
                    >
                         <Image
                              source={require("../../../assets/icons/layers.png")}
                         />

                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "700",
                                   paddingTop: 5,
                              }}
                         >
                              Intermediate
                         </Text>
                         <Text
                              style={{
                                   fontSize: 14,
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Your level
                         </Text>
                    </TouchableOpacity>
               </View>
               <View
                    style={{
                         flexDirection: "row",
                         justifyContent: "space-between",
                         marginTop: 16,
                         marginHorizontal: 8,
                    }}
               >
                    <TouchableOpacity
                         style={{
                              backgroundColor: "white",
                              alignItems: "center",
                              shadowColor: "black",
                              shadowOffset: { width: 1, height: 1 },
                              shadowRadius: 1,
                              elevation: 8,
                              width: SCREEN_WIDTH / 2.15,
                              paddingVertical: 22,
                              paddingHorizontal: 32,
                         }}
                         onPress={() => props.navigation.navigate("PeerRating")}
                    >
                         <Image
                              source={require("../../../assets/icons/award.png")}
                         />
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "700",
                                   paddingTop: 5,
                              }}
                         >
                              4.4/5
                         </Text>
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "300",
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Peer rating
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         style={{
                              backgroundColor: "white",
                              alignItems: "center",
                              shadowColor: "black",
                              shadowOffset: { width: 1, height: 1 },
                              shadowRadius: 1,
                              elevation: 8,
                              width: SCREEN_WIDTH / 2.15,
                              paddingVertical: 22,
                              paddingHorizontal: 32,
                         }}
                         onPress={() => props.navigation.navigate("YourSkills")}
                    >
                         <Image
                              source={require("../../../assets/icons/key.png")}
                              style={{ height: 15, width: 15 }}
                         />

                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "700",
                                   paddingTop: 5,
                              }}
                         >
                              4.2/5 -{" "}
                              <Text style={{ fontWeight: "300" }}>
                                   {" "}
                                   Avg skills
                              </Text>
                         </Text>

                         <Text
                              style={{
                                   fontSize: 12,
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Skills actual
                         </Text>
                    </TouchableOpacity>
               </View>
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: Colors.screenbackground,
     },
});
export default Skills;
