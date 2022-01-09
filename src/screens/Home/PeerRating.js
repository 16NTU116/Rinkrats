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

const PeerRating = (props) => {
     const [ratings, setRatings] = useState(4);
     const [ratingsPassing, setRatingsPassing] = useState(4);
     const [ratingsRecieving, setRatingsRecieving] = useState(4);
     const [ratingsChecking, setRatingsChecking] = useState(4);
     const getRatings = (val) => {
          setRatings(val);
     };
     const getRatingsPassing = (val) => {
          setRatingsPassing(val);
     };
     const getRatingsRecieving = (val) => {
          setRatingsRecieving(val);
     };
     const getRatingsChecking = (val) => {
          setRatingsChecking(val);
     };
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
                              Peer Rating
                         </Text>
                    </View>
                    <View
                         style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "90%",
                              alignSelf: "center",
                              marginTop: 30,
                         }}
                    >
                         <View>
                              <Text>Skating - {ratings}/5</Text>
                         </View>
                         <AirbnbRating
                              count={5}
                              defaultRating={4}
                              size={20}
                              showRating={false}
                              //   selectedColor={"#40D9E3"}
                              onFinishRating={(val) => getRatings(val)}
                         />
                    </View>

                    <View
                         style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "90%",
                              alignSelf: "center",
                              marginTop: 10,
                         }}
                    >
                         <View>
                              <Text>Passing - {ratingsPassing}/5</Text>
                         </View>
                         <AirbnbRating
                              count={5}
                              defaultRating={4}
                              size={20}
                              showRating={false}
                              //   selectedColor={"#40D9E3"}
                              onFinishRating={(val) => getRatingsPassing(val)}
                         />
                    </View>

                    <View
                         style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "90%",
                              alignSelf: "center",
                              marginTop: 10,
                         }}
                    >
                         <View>
                              <Text>Recieving - {ratingsRecieving}/5</Text>
                         </View>
                         <AirbnbRating
                              count={5}
                              defaultRating={4}
                              size={20}
                              showRating={false}
                              //   selectedColor={"#40D9E3"}
                              onFinishRating={(val) => getRatingsRecieving(val)}
                         />
                    </View>

                    <View
                         style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "90%",
                              alignSelf: "center",
                              marginTop: 10,
                         }}
                    >
                         <View>
                              <Text>Checking - {ratingsChecking}/5</Text>
                         </View>
                         <AirbnbRating
                              count={5}
                              defaultRating={4}
                              size={20}
                              showRating={false}
                              //   selectedColor={"#40D9E3"}
                              onFinishRating={(val) => getRatingsChecking(val)}
                         />
                    </View>
                    <View style={{ height: 200 }} />

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
export default PeerRating;
