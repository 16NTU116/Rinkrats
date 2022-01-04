import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import { Styles, Fonts } from "../utils";


export const HeadingText = (props) => {
	return (
		<Text
			style={[
				Styles.headingText,
				{ color: props.color ? props.color : "black" },
			]}
		>
			{props.label}
		</Text>
	);
};

export const ParaText = (props) => {
	return (
		<Text
			style={[Styles.paraText, { color: props.color ? props.color : "black" }]}
		>
			{props.label}
		</Text>
	);
};
