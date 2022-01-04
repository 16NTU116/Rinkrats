import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	Text,
	SafeAreaView,
} from "react-native";

import Colors from "../utils/colors";

const OnboardingBigText = (props) => {
	const { text } = props;
	return (
		<Text
			style={{
				fontSize: 44,
				textAlign: "center",
				color: Colors.charcoal,
				fontWeight: "600",
			}}
		>
			{text}
		</Text>
	);
};

export default OnboardingBigText;
