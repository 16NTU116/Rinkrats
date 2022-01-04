import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import Colors from "../utils/colors";
import jwt_decode from "jwt-decode";
import {
	LOGO,
	ONBOARDING_BG,
	SCREEN_WIDTH,
	SCREEN_HEIGHT,
} from "../utils/Constants";
import { UserStoreContext } from "../store/UserStoreContext";
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import LoginLoader from '../components/LoginLoader';

const Splash = (props) => {
	const [loaded, setLoaded] = useState(true);
	// const user = useContext(UserStoreContext);
	useEffect(async () => {
		console.log("new hello");
		props.navigation.navigate("Welcome");
		// AsyncStorage.clear();
		// let token = await AsyncStorage.getItem("@app:token");
		// if (token) {
		// 	props.navigation.navigate("Stadium");
		// } else {
		// 	props.navigation.navigate("Welcome");
		// }
	});

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={ONBOARDING_BG}
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}
			/>
			{!loaded && <Loader />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary,
	},
	logo: {
		alignSelf: "center",
		width: 330,
		height: 335,
	},
});
export default Splash;
