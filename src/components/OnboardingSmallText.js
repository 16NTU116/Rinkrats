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

const OnboardingSmallText = (props) => {
	const { text, style } = props;
	return (
		<Text
			style={
				([style],
				{
					fontSize: 16,
					fontFamily: "Nunito",
					textAlign: "center",
					color: Colors.white,
					fontWeight: "600",
					marginTop: 30,
				})
			}
		>
			{text}
		</Text>
	);
};

export default OnboardingSmallText;
