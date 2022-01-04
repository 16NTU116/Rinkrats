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

const RoleTypes = (props) => {
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
						Role Type
					</Text>
				</View>
				<View
					style={{ position: "relative", marginHorizontal: 21, marginTop: 13 }}
				>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Your Highest Level"
						label="Your Highest Level"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 50,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Player
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Captain
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							League Manager
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Scorekeeper
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Tournament Coordinator
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Coach
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Subcoordinator
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
							marginBottom: 100,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Referee
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "#D7DCE2",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(16),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("PasswordUpdated")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.textColorDullHome,
							}}
						>
							DONE
						</Text>
					</TouchableOpacity>
				</View>
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
export default RoleTypes;
