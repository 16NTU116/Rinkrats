import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AuthHeader = (props) => (
	<View style={{ flexDirection: "row", alignItems: "center" }}>
		<TouchableOpacity onPress={() => props.navigation.goBack()}>
			<Ionicons name="ios-arrow-back-outline" color="white" size={20} />
		</TouchableOpacity>
		<Text
			style={{
				color: "white",
				fontSize: 16,
				fontWeight: "700",
				paddingLeft: 12,
			}}
		>
			{props.title}
		</Text>
	</View>
);

export default AuthHeader;
