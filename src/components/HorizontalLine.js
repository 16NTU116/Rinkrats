import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const HorizontalLine = ({ style }) => (
	<View
		style={{
			height: 2,
			width: "100%",
			marginTop: 12,
			backgroundColor: "#E9EDF1",
			marginHorizontal: 12,
		}}
	/>
);

export default HorizontalLine;
