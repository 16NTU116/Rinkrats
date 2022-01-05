import React, { useState, useEffect, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Button } from "react-native-paper";
import { Colors, Styles, axios, Constants } from "../../utils/index";
import { LOGO, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/Constants";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../store/UserStoreContext";
import { white } from "react-native-paper/lib/typescript/styles/colors";
const Login = observer((props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  // useEffect(() => {
  // 	user.setPhoneNumber(phoneNumber);
  // }, [phoneNumber]);

  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{ marginVertical: 0, alignSelf: "center" }}>
          <Image width={350} height={120} style={styles.logo} source={LOGO} />
        </View>
        <View style={{ marginTop: 40 }} />
        <TextInput
          keyboardType="default"
          mode="outlined"
          style={{
            backgroundColor: "white",
          }}
          theme={{
            colors: { primary: Colors.prim1, underlineColor: "transparent" },
          }}
          outlineColor={Colors.primary}
          selectionColor={Colors.primary}
          label="Email"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View style={{ marginTop: 20 }} />
        <TextInput
          keyboardType="default"
          mode="outlined"
          style={{
            backgroundColor: "white",
          }}
          theme={{
            colors: { primary: Colors.prim1, underlineColor: "transparent" },
          }}
          outlineColor={Colors.primary}
          selectionColor={Colors.primary}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: Colors.prim1,
            marginHorizontal: 20,
            borderRadius: 5,
            width: 180,
            marginTop: 30,
            padding: 16,
          }}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text
            style={{ fontFamily: "Nunito", fontSize: 20, color: Colors.white }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => props.navigation.navigate("ResetPassword")}
        >
          <Text style={{ textAlign: "center" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
});

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    marginTop: SCREEN_HEIGHT * 0.235,
    width: 330,
    height: 70,
  },
});
