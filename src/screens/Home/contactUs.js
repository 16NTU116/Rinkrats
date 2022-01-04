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
import {
	CONTACT_VECTOR,
	SCREEN_HEIGHT,
	SCREEN_WIDTH,
	UNKNOWNIMAGE,
} from "../../utils/Constants";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../store/UserStoreContext";
import InputText from "../../components/InputText";
import OnboardingSmallText from "../../components/OnboardingSmallText";

import Ionicons from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-crop-picker";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const termsAndConditions = observer((props) => {
	const [message, setMessage] = useState(null);
	const [uri, setUri] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 10,
						marginHorizontal: 30,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							props.navigation.goBack();
						}}
						style={{
							backgroundColor: "lightgrey",
							borderRadius: 30,
							padding: 10,
						}}
					>
						<Ionicons name="ios-chevron-back" size={24} color={Colors.prim1} />
					</TouchableOpacity>
				</View>

				<View style={{ marginHorizontal: 20 }}>
					<Image
						source={CONTACT_VECTOR}
						style={{
							width: 300,
							height: 200,
							alignSelf: "center",
						}}
					/>
					<View
						style={{
							marginTop: 20,
						}}
					>
						<OnboardingSmallText text={"Contact Us"} />
						<InputText
							text={
								"Feel free to contact us and we will get back to to as soon as we can"
							}
						/>
					</View>
					<TextInput
						keyboardType="default"
						style={{
							marginTop: SCREEN_HEIGHT * 0.05,
							height: SCREEN_HEIGHT * 0.1,
							backgroundColor: "white",
						}}
						theme={{
							colors: { primary: Colors.prim1, underlineColor: "transparent" },
						}}
						outlineColor={Colors.primary}
						selectionColor={Colors.primary}
						label="Tell us about it"
						value={message}
						multiline
						onChangeText={(text) => setMessage(text)}
					/>
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
				onPress={() => props.navigation.navigate("Home")}
			>
				<Text
					style={{
						fontFamily: "Nunito",
						fontSize: 25,
						color: Colors.white,
						fontWeight: "bold",
					}}
				>
					Send
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
});

export default termsAndConditions;
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
