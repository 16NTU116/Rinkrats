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

const History = (props) => {
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
                              Play History
                         </Text>
                    </View>
               </View>
               <FlatList
                    data={[1, 2, 3]}
                    key={"_"}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                         return (
                              <View
                                   style={{
                                        marginHorizontal: 8,
                                        backgroundColor: "white",
                                        paddingBottom: 20,
                                        paddingTop: 12,
                                   }}
                              >
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             justifyContent: "space-between",
                                        }}
                                   >
                                        <Text
                                             style={{
                                                  fontSize: 16,
                                                  fontWeight: "700",
                                             }}
                                        >
                                             Rink Royce
                                        </Text>
                                        <Text
                                             style={{
                                                  fontSize: 12,
                                                  fontWeight: "400",
                                                  color: Colors.prim1,
                                             }}
                                        >
                                             5th April 2020
                                        </Text>
                                   </View>
                                   <View
                                        style={{
                                             flexDirection: "row",
                                             justifyContent: "space-between",
                                             marginTop: 12,
                                        }}
                                   >
                                        <TouchableOpacity
                                             style={{
                                                  backgroundColor: "white",
                                                  alignItems: "center",
                                                  shadowColor: "black",
                                                  shadowOffset: {
                                                       width: 1,
                                                       height: 1,
                                                  },
                                                  shadowRadius: 1,
                                                  elevation: 8,
                                                  width: SCREEN_WIDTH / 2.15,
                                                  paddingVertical: 22,
                                                  paddingHorizontal: 32,
                                             }}
                                             onPress={() =>
                                                  props.navigation.navigate(
                                                       "PaymentHistory"
                                                  )
                                             }
                                        >
                                             <Image
                                                  source={require("../../../assets/icons/viewGame.png")}
                                                  style={{
                                                       height: 60,
                                                       width: 60,
                                                       resizeMode: "contain",
                                                  }}
                                             />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                             style={{
                                                  backgroundColor: "white",
                                                  alignItems: "center",
                                                  shadowColor: "black",
                                                  shadowOffset: {
                                                       width: 1,
                                                       height: 1,
                                                  },
                                                  shadowRadius: 1,
                                                  elevation: 8,
                                                  width: SCREEN_WIDTH / 2.15,
                                                  paddingVertical: 22,
                                                  paddingHorizontal: 32,
                                                  justifyContent: "center",
                                             }}
                                             onPress={() =>
                                                  props.navigation.navigate(
                                                       "PaymentModes"
                                                  )
                                             }
                                        >
                                             <Image
                                                  source={require("../../../assets/icons/calendar.png")}
                                             />
                                             <Text>Payment History</Text>
                                        </TouchableOpacity>
                                   </View>
                              </View>
                         );
                    }}
               />

               <Image
                    source={require("../../../assets/icons/tiltphone.png")}
                    style={{
                         position: "absolute",
                         top: normalize(330),
                         right: 0,
                    }}
               />
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: Colors.screenbackground,
     },
});
export default History;
