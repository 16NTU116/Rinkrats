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
import { AirbnbRating } from "react-native-ratings";
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

const YourLevel = (props) => {
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
                              Your Level
                         </Text>
                    </View>

                    <TouchableOpacity
                         onPress={() => {
                              setBeginner(true);
                              setIntermediate(false);
                              setPro(false);
                         }}
                         style={{
                              width: "90%",
                              borderWidth: beginner ? 1 : 0,
                              borderColor: "#40D9E3",
                              alignSelf: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingVertical: 14,
                              marginTop: 20,
                              backgroundColor: beginner ? "#E5FAFB" : "white",
                         }}
                    >
                         <Text
                              style={{
                                   color: "black",
                                   fontSize: 15,
                                   fontWeight: "bold",
                              }}
                         >
                              Beginner
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => {
                              setBeginner(false);
                              setIntermediate(true);
                              setPro(false);
                         }}
                         style={{
                              width: "90%",
                              borderWidth: intermediate ? 1 : 0,
                              borderColor: "#40D9E3",
                              alignSelf: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingVertical: 14,
                              marginTop: 20,
                              backgroundColor: intermediate
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
                              Intermediate
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => {
                              setBeginner(false);
                              setIntermediate(false);
                              setPro(true);
                         }}
                         style={{
                              width: "90%",
                              borderWidth: pro ? 1 : 0,
                              borderColor: "#40D9E3",
                              alignSelf: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingVertical: 14,
                              marginTop: 20,
                              backgroundColor: pro ? "#E5FAFB" : "white",
                         }}
                    >
                         <Text
                              style={{
                                   color: "black",
                                   fontSize: 15,
                                   fontWeight: "bold",
                              }}
                         >
                              Pro
                         </Text>
                    </TouchableOpacity>
                    <View style={{ height: 200 }} />
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
export default YourLevel;
