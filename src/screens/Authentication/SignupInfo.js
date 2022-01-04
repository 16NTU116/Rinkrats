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
import { TextInput, Button, CheckBox } from "react-native-paper";
import { Colors, Styles, axios, Constants } from "../../utils/index";
import {
  LOGO,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  UNKNOWNIMAGE,
} from "../../utils/Constants";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../store/UserStoreContext";
import InputText from "../../components/InputText";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-crop-picker";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const SignupInfo = observer((props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [userimage, setuserimage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [uri, setUri] = useState(null);
  const [selected, setSelected] = useState(false);

  const selectImage = async () => {
    console.log("Opening gallery");
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      mediaType: "photo",
    }).then((image) => {
      setuserimage(image.path);
      setImageSelected(true);

      // const uri = "data:image/jpeg;base64," + image.data;
      setUri(uri);
      let formData = new FormData();

      formData.append("file", {
        image,
        name: `photo.${image.filename}`,
        type: `${image.mime}`,
      });
      // console.log("Form data is " + JSON.stringify(formData));
    });
  };

  const image_source = userimage === null ? UNKNOWNIMAGE : { uri: userimage };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={{
            justifyContent: "space-around",
            alignContent: "flex-start",
            alignItems: "center",
            borderStyle: "dotted",
            borderWidth: 2,
            borderRadius: 2000,
            marginTop: 24,
            width: 105,
            height: 105,
            padding: 20,
            alignSelf: "center",
            top: SCREEN_HEIGHT * 0.005,
            borderColor: Colors.prim1,
          }}
          onPress={() => selectImage()}
        >
          <Ionicons name="ios-camera" size={25} color={Colors.prim1} />

          <Text>UPLOAD</Text>
        </TouchableOpacity>
        {/* <Image source={image_source} width={200} style={{width:200,borderRadius:2000}} /> */}

        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            keyboardType="default"
            style={{
              borderTopColor: "white",
              marginTop: SCREEN_HEIGHT * 0.025,
              backgroundColor: "white",
            }}
            theme={{
              colors: { primary: Colors.prim1, underlineColor: "transparent" },
            }}
            outlineColor={Colors.primary}
            selectionColor={Colors.primary}
            label="Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            keyboardType="default"
            style={{
              borderTopColor: "white",
              backgroundColor: "white",
            }}
            theme={{
              colors: { primary: Colors.prim1, underlineColor: "transparent" },
            }}
            outlineColor={Colors.primary}
            selectionColor={Colors.primary}
            label="Contact Number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            keyboardType="default"
            style={{
              borderTopColor: "white",
              backgroundColor: "white",
              // marginTop: SCREEN_HEIGHT * 0.05,
            }}
            theme={{
              colors: { primary: Colors.prim1, underlineColor: "transparent" },
            }}
            outlineColor={Colors.primary}
            selectionColor={Colors.primary}
            label="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            keyboardType="default"
            style={{
              borderTopColor: "white",
              backgroundColor: "white",
            }}
            theme={{
              colors: { primary: Colors.prim1, underlineColor: "transparent" },
            }}
            outlineColor={Colors.primary}
            selectionColor={Colors.primary}
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            keyboardType="default"
            style={{
              borderTopColor: "white",
              backgroundColor: "white",
            }}
            theme={{
              colors: { primary: Colors.prim1, underlineColor: "transparent" },
            }}
            outlineColor={Colors.primary}
            selectionColor={Colors.primary}
            secureTextEntry={true}
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 24,
            alignContent: "center",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <TouchableOpacity onPress={() => setSelected(!selected)}>
            <Ionicons
              name={selected === true ? "checkbox-outline" : "square-outline"}
              size={18}
              color={Colors.prim1}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 8, fontSize: 16 }}>I agree to the </Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("TermsAndConditions")}
          >
            <Text
              style={{
                fontSize: 16,
                textDecorationLine: "underline",
                color: "blue",
              }}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: Colors.prim1,
          marginHorizontal: 20,
          borderRadius: 100,
          width: SCREEN_WIDTH * 0.9,
          padding: 16,
        }}
        onPress={() => props.navigation.navigate("OtpVerify")}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 20, color: Colors.white }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});

export default SignupInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    backgroundColor: "white",
  },
  bottom: {
    marginTop: StatusBar.currentHeight,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
});
