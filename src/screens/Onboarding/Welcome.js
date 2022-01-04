import React, { useState, useEffect, useContext, useRef } from "react";
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	Text,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
	ONBOARDING_BG,
	ONBOARDING_BG2,
	SCREEN_HEIGHT,
} from "../../utils/Constants";
import Colors from "../../utils/colors";
import OnboardingCard from "../../components/OnboardingCard";

const Welcome = (props) => {
	// const [slide, setSlide] = useState(0);
	// useEffect(async () => {
	// 	console.log("new hello");
	// });

	const Card = () => {
		return (
			<OnboardingCard
				text="Pickup hockey  -  Leagues  -  Skills"
				image={ONBOARDING_BG}
				nextScreen={"Intro"}
				navigation={props.navigation}
			/>
		);
	};
	return <Card />
};

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: Colors.primary,
	},
	logo: {
		alignSelf: "center",
		height: SCREEN_HEIGHT * 0.4,
	},
});
export default Welcome;
