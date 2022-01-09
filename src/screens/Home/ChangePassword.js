import React, { useState, useEffect, useContext } from "react";
import {
     View,
     StyleSheet,
     Image,
     SafeAreaView,
     TouchableOpacity,
     Text,
     TextInput,
     ImageBackground,
} from "react-native";
import Colors from "../../utils/colors";

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

const ChangePassword = (props) => {
     const [name, setName] = useState("");
     const [oldPassword, setOldPassword] = useState();
     const [newPassword, setNewPassword] = useState();
     const [confirmNewPassword, setConfirmNewPassword] = useState();
     const [show, setShow] = useState(false);
     useEffect(async () => {
          console.log("new hello");
     });

     return (
          <SafeAreaView style={styles.container}>
               <View
                    style={{
                         flexDirection: "row",
                         alignItems: "center",
                         marginHorizontal: 12,
                         paddingBottom: 14,
                    }}
               >
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
                         Change Password
                    </Text>
               </View>
               <View
                    style={{
                         position: "relative",
                         marginHorizontal: 21,
                         marginTop: 13,
                    }}
               >
                    <Text>Enter your old password </Text>

                    <View
                         style={{
                              flexDirection: "row",
                              width: "100%",
                              alignSelf: "center",
                              borderColor: Colors.notiTextColor,
                              borderWidth: 1,
                              borderRadius: 5,
                              backgroundColor: "transparent",
                              justifyContent: "space-between",
                              paddingVertical: 5,
                              alignItems: "center",
                              paddingHorizontal: 5,
                              marginVertical: 10,
                         }}
                    >
                         <TextInput
                              keyboardType="default"
                              style={{
                                   fontSize: 16,
                                   color: "black",
                              }}
                              placeholder="Old Password"
                              secureTextEntry
                              placeholderTextColor={Colors.notiTextColor}
                              value={confirmNewPassword}
                              onChangeText={(text) => setOldPassword(text)}
                         />
                         <Ionicons
                              name="ios-eye-off-outline"
                              color="gray"
                              size={25}
                         />
                    </View>

                    <TouchableOpacity
                         onPress={() => props.navigation.navigate("Forgot")}
                    >
                         <Text
                              style={{
                                   alignSelf: "flex-end",
                                   color: Colors.prim1,
                                   fontWeight: "600",
                              }}
                         >
                              Forgot Password
                         </Text>
                    </TouchableOpacity>
                    <Text>Enter a new password </Text>

                    <View
                         style={{
                              flexDirection: "row",
                              width: "100%",
                              alignSelf: "center",
                              borderColor: Colors.notiTextColor,
                              borderWidth: 1,
                              borderRadius: 5,
                              backgroundColor: "transparent",
                              justifyContent: "space-between",
                              paddingVertical: 5,
                              alignItems: "center",
                              paddingHorizontal: 5,
                              marginVertical: 10,
                         }}
                    >
                         <TextInput
                              keyboardType="default"
                              style={{
                                   fontSize: 16,
                                   color: "black",
                              }}
                              placeholder="New Password"
                              secureTextEntry
                              placeholderTextColor={Colors.notiTextColor}
                              value={confirmNewPassword}
                              onChangeText={(text) => setNewPassword(text)}
                         />
                         <Ionicons
                              name="ios-eye-off-outline"
                              color="gray"
                              size={25}
                         />
                    </View>
                    <View
                         style={{
                              flexDirection: "row",
                              width: "100%",
                              alignSelf: "center",
                              borderColor: Colors.notiTextColor,
                              borderWidth: 1,
                              borderRadius: 5,
                              backgroundColor: "transparent",
                              justifyContent: "space-between",
                              paddingVertical: 5,
                              alignItems: "center",
                              paddingHorizontal: 5,
                         }}
                    >
                         <TextInput
                              keyboardType="default"
                              style={{
                                   fontSize: 16,
                                   color: "black",
                              }}
                              placeholder="Confirm Password"
                              secureTextEntry
                              placeholderTextColor={Colors.notiTextColor}
                              value={confirmNewPassword}
                              onChangeText={(text) =>
                                   setConfirmNewPassword(text)
                              }
                         />
                         <Ionicons
                              name="ios-eye-off-outline"
                              color="gray"
                              size={25}
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
                         onPress={() =>
                              props.navigation.navigate("PasswordUpdated")
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
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "white",
     },
});
export default ChangePassword;
