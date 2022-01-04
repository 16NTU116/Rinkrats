import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Text,
	ImageBackground,
	ScrollView,
} from "react-native";
import Colors from "../../utils/colors";
import { TextInput } from "react-native-paper";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
	SCREEN_HEIGHT,
	GOLDCOINSIMPLE,
	COINBG,
	MASTERCARD,
	SCREEN_WIDTH,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import AuthText from "../../components/AuthText";

const CreateLeague = (props) => {
	const [name, setName] = useState("");
	const [show, setShow] = useState(false);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginHorizontal: 12,
						paddingBottom: 14,
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
						Create a league
					</Text>
				</View>
				<View
					style={{ position: "relative", marginHorizontal: 21, marginTop: 13 }}
				>
					<TextInput
						style={{ backgroundColor: "transparent", borderColor: "#E9EDF1" }}
						placeholder="League name"
						label="League name"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Type of league"
						label="Type of league"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Rounds"
						label="Rounds"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Select Divisions"
						label="Select Divisions"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
				</View>
				<TouchableOpacity
					style={{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: Colors.prim1,
						marginHorizontal: 20,
						borderRadius: 2,
						width: SCREEN_WIDTH * 0.9,
						marginTop: normalize(317),
						padding: 16,
					}}
					onPress={() => props.navigation.navigate("DateRange")}
				>
					<Text
						style={{
							fontFamily: "Nunito",
							fontSize: 16,
							color: Colors.white,
						}}
					>
						NEXT · SELECT DATES
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenbackground,
	},
});
export default CreateLeague;
