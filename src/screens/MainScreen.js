import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Colors from "../utils/colors";
// import { TextInput, Button } from "react-native-paper";
import jwt_decode from "jwt-decode";
import {
  SCREEN_HEIGHT,
  ONBOARDING_BG2,
  SCREEN_WIDTH,
  GOOGLE_LOGO,
  FACEBOOK_LOGO,
} from "../utils/Constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserStoreContext } from "../store/UserStoreContext";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import LoginLoader from '../components/LoginLoader';

const MainScreen = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(true);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          style={styles.logo}
          source={ONBOARDING_BG2}
        />
        <View
          style={{
            position: "absolute",
            top: SCREEN_HEIGHT * 0.05,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <View style={{ position: "relative" }}>
            <View style={{ marginHorizontal: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <TouchableOpacity
                  onPress={() => setSignup(true)}
                  style={[
                    {
                      flex: 0.5,
                      paddingVertical: 7,
                      borderRadius: 20,
                      alignItems: "center",
                      marginLeft: 0,
                      borderRightWidth: signup ? 0.25 : 0,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 18,
                      fontWeight: signup ? "700" : "500",
                      color: signup ? "white" : Colors.dull,
                      padding: 12,
                    }}
                  >
                    SIGN UP
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSignup(false)}
                  style={[
                    {
                      flex: 0.5,
                      paddingVertical: 7,
                      borderRadius: 20,
                      alignItems: "center",
                      borderLeftWidth: !signup ? 0.25 : 0,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 18,
                      fontWeight: !signup ? "700" : "500",
                      color: !signup ? "white" : Colors.dull,
                    }}
                  >
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    borderBottomColor: Colors.dull,
                    borderBottomWidth: 1,
                    width: SCREEN_WIDTH * 0.1,
                  }}
                />

                <View
                  style={{
                    borderBottomColor: signup ? Colors.lightRed : Colors.dull,
                    borderBottomWidth: signup ? 4 : 1,
                    width: SCREEN_WIDTH * 0.28,
                  }}
                />

                <View
                  style={{
                    borderBottomColor: Colors.dull,
                    borderBottomWidth: 1,
                    width: SCREEN_WIDTH * 0.2,
                  }}
                />

                <View
                  style={{
                    borderBottomColor: !signup ? Colors.lightRed : Colors.dull,
                    borderBottomWidth: !signup ? 4 : 1,
                    width: SCREEN_WIDTH * 0.26,
                  }}
                />

                <View
                  style={{
                    borderBottomColor: Colors.dull,
                    borderBottomWidth: 1,
                    width: SCREEN_WIDTH * 0.1,
                  }}
                />
              </View>
            </View>

            {signup && (
              <View>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: Colors.dull,
                    marginHorizontal: 20,
                    borderRadius: 2,
                    width: SCREEN_WIDTH * 0.9,
                    marginTop: SCREEN_HEIGHT * 0.1,
                    padding: 16,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                  // onPress={() => props.navigation.navigate("Login")}
                >
                  <Image source={require("../../assets/images/google.png")} />
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      fontWeight: "600",
                      color: Colors.white,
                      paddingLeft: 8,
                    }}
                  >
                    SIGNUP WITH GOOGLE
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: Colors.dull,
                    marginHorizontal: 20,
                    borderRadius: 2,
                    width: SCREEN_WIDTH * 0.9,
                    marginTop: 16,
                    padding: 16,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                  // onPress={() => props.navigation.navigate("Login")}
                >
                  <Image source={require("../../assets/images/facebook.png")} />

                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      fontWeight: "600",
                      color: Colors.white,
                      paddingLeft: 8,
                    }}
                  >
                    SIGNUP WITH FACEBOOK
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: "Nunito",
                    fontSize: 14,
                    color: Colors.dull,
                    alignSelf: "center",
                    marginTop: SCREEN_HEIGHT * 0.05,
                    marginBottom: SCREEN_HEIGHT * 0.05,
                  }}
                >
                  OR
                </Text>

                <TextInput
                  keyboardType="default"
                  style={{
                    margin: 10,
                    padding: 16,
                    fontSize: 16,
                    backgroundColor: "transparent",
                    color: Colors.white,
                    borderWidth: 1,
                    borderColor: Colors.dull,
                    width: SCREEN_WIDTH * 0.9,
                    alignSelf: "center",
                  }}
                  placeholder="Email/Phone Number"
                  placeholderTextColor={Colors.dull}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />

                <TextInput
                  keyboardType="default"
                  style={{
                    margin: 10,
                    padding: 16,
                    fontSize: 16,
                    backgroundColor: "transparent",
                    color: Colors.white,
                    borderWidth: 1,
                    borderColor: Colors.dull,
                    width: SCREEN_WIDTH * 0.9,
                    alignSelf: "center",
                  }}
                  placeholder="Password"
                  placeholderTextColor={Colors.dull}
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor:
                      name.length < 1 ? Colors.redDull : Colors.prim1,
                    marginHorizontal: 20,
                    borderRadius: 2,
                    width: SCREEN_WIDTH * 0.9,
                    marginTop: SCREEN_HEIGHT * 0.1,
                    padding: 16,
                  }}
                  onPress={() => {
                    setSignup(false);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      color:
                        name.length < 1 ? Colors.textColorDull : Colors.white,
                    }}
                  >
                    SIGNUP
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {!signup && (
              <View>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: Colors.dull,
                    marginHorizontal: 20,
                    borderRadius: 2,
                    width: SCREEN_WIDTH * 0.9,
                    marginTop: SCREEN_HEIGHT * 0.1,
                    padding: 16,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  // onPress={() => props.navigation.navigate("Login")}
                >
                  <Image source={require("../../assets/images/google.png")} />

                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      fontWeight: "600",
                      color: Colors.white,
                      paddingLeft: 8,
                    }}
                  >
                    LOGIN WITH GOOGLE
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: Colors.dull,
                    marginHorizontal: 20,
                    borderRadius: 2,
                    width: SCREEN_WIDTH * 0.9,
                    marginTop: 16,
                    padding: 16,
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                  // onPress={() => props.navigation.navigate("Login")}
                >
                  <Image source={require("../../assets/images/facebook.png")} />

                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      fontWeight: "600",
                      color: Colors.white,
                      paddingLeft: 8,
                    }}
                  >
                    LOGIN WITH FACEBOOK
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: "Nunito",
                    fontSize: 14,
                    color: Colors.dull,
                    alignSelf: "center",
                    marginTop: SCREEN_HEIGHT * 0.05,
                    marginBottom: SCREEN_HEIGHT * 0.05,
                  }}
                >
                  OR
                </Text>

                <TextInput
                  keyboardType="default"
                  style={{
                    margin: 10,
                    padding: 16,
                    fontSize: 16,
                    backgroundColor: "transparent",
                    color: Colors.white,
                    borderWidth: 1,
                    borderColor: Colors.dull,
                    width: SCREEN_WIDTH * 0.9,
                    alignSelf: "center",
                  }}
                  placeholder="Email/Phone Number"
                  placeholderTextColor={Colors.dull}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />

                <TextInput
                  keyboardType="default"
                  style={{
                    margin: 10,
                    padding: 16,
                    fontSize: 16,
                    backgroundColor: "transparent",
                    color: Colors.white,
                    borderWidth: 1,
                    borderColor: Colors.dull,
                    width: SCREEN_WIDTH * 0.9,
                    alignSelf: "center",
                  }}
                  placeholder="Password"
                  placeholderTextColor={Colors.dull}
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                  onPress={() => {
                    props.navigation.navigate("ForgotPassword");
                  }}
                >
                  <Text
                    style={{
                      marginTop: 4,
                      color: "white",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor:
                      name.length < 1 ? Colors.redDull : Colors.prim1,
                    marginHorizontal: 20,
                    borderRadius: 2,
                    width: SCREEN_WIDTH * 0.9,
                    marginTop: SCREEN_HEIGHT * 0.1,
                    padding: 16,
                  }}
                  onPress={() => props.navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      color:
                        name.length < 1 ? Colors.textColorDull : Colors.white,
                    }}
                  >
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
export default MainScreen;
