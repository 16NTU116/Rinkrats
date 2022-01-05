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
import jwt_decode from "jwt-decode";
import {
     GOLDCOINSIMPLE,
     DOLLAR,
     SCREEN_WIDTH,
     COINBG,
     GOLDCOIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";

const Payments = (props) => {
     const [name, setName] = useState(null);
     const [password, setPassword] = useState(null);
     const [signup, setSignup] = useState(true);
     useEffect(async () => {
          console.log("new hello");
     });

     return (
          <SafeAreaView style={styles.container}>
               <View
                    style={{
                         marginHorizontal: 12,
                         paddingBottom: 14,
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
                              Payments
                         </Text>
                    </View>
               </View>
               <ImageBackground
                    source={COINBG}
                    resizeMode="cover"
                    style={{ width: "100%", height: normalize(190) }}
               >
                    <View
                         style={{
                              alignItems: "center",
                         }}
                    >
                         <Image source={DOLLAR} style={{ marginTop: 44 }} />
                         <Text
                              style={{
                                   color: "white",
                                   fontWeight: "700",
                                   fontSize: 20,
                                   marginTop: 10,
                              }}
                         >
                              $357
                         </Text>
                         <Text style={{ color: Colors.notiTextColor }}>
                              Your balance
                         </Text>
                    </View>
                    <View
                         style={{
                              flexDirection: "row",
                              width: "90%",
                              justifyContent: "space-between",
                              marginLeft: "5%",
                              alignItems: "center",
                              marginVertical: 10,
                         }}
                    >
                         <Text style={{ color: "gray", fontSize: 16 }}>
                              Recieve Money
                         </Text>
                         <Image
                              source={require("../../../assets/icons/arrowForward.png")}
                              style={{ height: 30, width: 30 }}
                         />
                    </View>
               </ImageBackground>
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
                              props.navigation.navigate("PaymentHistory")
                         }
                    >
                         <Ionicons
                              name="refresh-outline"
                              color={Colors.notiTextColor}
                              size={16}
                         />
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "bold",
                                   paddingTop: 5,
                              }}
                         >
                              $20 - 5th April
                         </Text>
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "600",
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Payment history
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
                         onPress={() =>
                              props.navigation.navigate("PaymentModes")
                         }
                    >
                         <Ionicons
                              name="card-outline"
                              color={Colors.notiTextColor}
                              size={16}
                         />
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "bold",
                                   paddingTop: 5,
                              }}
                         >
                              Credit card-Gold pucks
                         </Text>
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "600",
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Payment methods
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
                              paddingHorizontal: 20,
                         }}
                         onPress={() =>
                              props.navigation.navigate("PuckDetails")
                         }
                    >
                         <Image source={GOLDCOINSIMPLE} />
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "700",
                                   paddingTop: 5,
                              }}
                         >
                              158
                         </Text>
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "600",
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Gold pucks balance
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
                              paddingHorizontal: 24,
                         }}
                         onPress={() =>
                              props.navigation.navigate("PurchasedPucks")
                         }
                    >
                         <Image source={GOLDCOIN} />
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "bold",
                                   paddingTop: 5,
                              }}
                         >
                              $5.29 - 100 pucks
                         </Text>
                         <Text
                              style={{
                                   fontSize: 12,
                                   fontWeight: "600",
                                   paddingTop: 5,
                                   color: "gray",
                              }}
                         >
                              Purchase gold pucks
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
export default Payments;
