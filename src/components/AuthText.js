import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import Ionicons from "react-native-vector-icons/Ionicons";

const AuthText = (props) => (
	<View style={{ marginTop: normalize(47) }}>
		<Text
			style={{
				color: "white",
				fontSize: 14,
				fontWeight: "400",
			}}
		>
			{props.text}
		</Text>
	</View>
);

export default AuthText;
