import React, { useState, useEffect, useContext } from "react";
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

import Colors from "../utils/colors";
import Loader from "./Loader";
const MainHeader = (props) => {
	useEffect(async () => {
		console.log("new header ", props);
	});
	return (
		<View
			style={{
				backgroundColor: Colors.prim1,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<TouchableOpacity
				onPress={() => props.navigation.openDrawer()}
				style={{ padding: 7 }}
			>
				<Ionicons name="ios-menu" color={Colors.white} size={30} />
			</TouchableOpacity>
			<Text
				style={{
					color: Colors.white,
					fontSize: 18,
					fontWeight: "600",
				}}
			>
				{props.title}
			</Text>
			<TouchableOpacity
				onPress={() => props.navigation.navigate("Notifications")}
				style={{ padding: 7 }}
			>
				<Ionicons
					name="ios-notifications-outline"
					color={Colors.white}
					size={30}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: Colors.white,
	},
});
export default MainHeader;
