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

const InputText = (props) => {
	const { text, style } = props;
	return (
		<Text
			style={
				([style],
				{
					marginTop: 15,
					fontSize: 20,
					fontFamily: "AppleSDGothicNeo-Thin",
					fontFamily: "Avenir",
					color: Colors.lightcharcoal,
					fontWeight: "600",
					textAlign: "center",
					marginHorizontal: 20,
				})
			}
		>
			{text}
		</Text>
	);
};

export default InputText;
