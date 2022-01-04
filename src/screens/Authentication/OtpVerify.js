import React, { useState, useEffect, useContext } from "react";
import {
	View,
	Image,
	StyleSheet,
	StatusBar,
	Text,
	SafeAreaView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../store/UserStoreContext";
import { Colors, Styles, axios, Constants } from "../../utils/index";
import OnboardingSmallText from "../../components/OnboardingSmallText";
import Loader from "../../components/Loader";
import InputText from "../../components/InputText";

const OtpVerify = (props) => {
	const [code, setCode] = useState("");
	const [loaded, setLoaded] = useState(true);

	otpEntered = async (code) => {
		setLoaded(false)
		props.navigation.navigate("AccountCreatedSuccess");
		// setShowPopup(true)
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ marginHorizontal: 20, marginTop: 40 }}>
				<OnboardingSmallText text="Enter Veification Code" />
				<InputText text = {"A 6 digit verification code has been sent to your mobile"} />
				<OTPInputView
					style={{ width: "100%", height: 200 }}
					pinCount={6}
					code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
					onCodeChanged={(code) => {
						setCode(code);
					}}
					autoFocusOnLoad
					codeInputFieldStyle={Styles.underlineStyleBase}
					codeInputHighlightStyle={Styles.underlineStyleHighLighted}
					onCodeFilled={(code) => {
						otpEntered(code);
					}}
				/>
			</View>
			{!loaded && <Loader />}
		</SafeAreaView>
	);
};

export default OtpVerify;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
});
