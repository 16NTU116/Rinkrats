import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Text,
	FlatList,
	ImageBackground,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import {
	GOLDCOINSIMPLE,
	DOLLAR,
	SCREEN_WIDTH,
	COINBG,
	GOLDCOIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HorizontalLine from "../../components/HorizontalLine";

const Legal = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					marginHorizontal: 12,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<TouchableOpacity onPress={() => props.navigation.goBack()}>
						<Ionicons name="ios-arrow-back-outline" color="black" size={20} />
					</TouchableOpacity>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "700",
							paddingLeft: 12,
						}}
					>
						Legal Terms
					</Text>
				</View>
				<Text
					style={{
						color: "#70767D",
						fontSize: 14,
						fontWeight: "400",
						marginTop: normalize(19),
						lineHeight: 21,
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					diam lacus, imperdiet a risus ut, congue vehicula arcu. Nulla
					facilisi. Pellentesque scelerisque ante vel lorem dictum vestibulum.
				</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenbackground,
	},
});
export default Legal;
