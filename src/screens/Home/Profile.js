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
	SCREEN_HEIGHT,
	IMAGEBACK,
	SCREEN_WIDTH,
	PROFILE,
	SCHBG,
	OPENBG,
	PROFILE2,
	COINBG,
	PUCKS,
} from "../../utils/Constants";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import ProfileCards from "../../components/ProfileCards";

// import { UserStoreContext } from "../store/UserStoreContext";

const Profile = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	const [showPuck, setShowPuck] = useState(false);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ backgroundColor: Colors.screenbackground }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						marginHorizontal: 12,
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
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
							My Profile
						</Text>
					</View>
					<Ionicons
						name="ios-ellipsis-vertical-outline"
						color="black"
						size={20}
					/>
				</View>

				<ImageBackground
					source={IMAGEBACK}
					resizeMode="cover"
					style={{ width: "100%", height: normalize(344) }}
				>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Image source={PROFILE} />
						<View>
							<Text style={{ color: "white", fontSize: 10, fontWeight: "400" }}>
								Joined on 21 July 2020
							</Text>
							<Text
								style={{
									color: "white",
									fontSize: 20,
									fontWeight: "700",
									marginVertical: 12,
								}}
							>
								John Silva
							</Text>
							<TouchableOpacity
								style={{
									backgroundColor: "rgba(255, 255, 255, 0.15)",
									alignItems: "center",
									paddingVertical: 4,
									paddingHorizontal: 10,
									borderRadius: 15,
								}}
							>
								<Text
									style={{ color: "white", fontSize: 10, fontWeight: "500" }}
								>
									LEFT WING
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{ marginLeft: normalize(77) }}>
							<Progress.Circle
								color={Colors.green}
								thickness={4}
								progress={0.7}
								size={normalize(60)}
								showsText={true}
								formatText={() => {
									return `70% `;
								}}
							/>
							<Text
								style={{
									color: "#c4cad3",
									fontSize: 10,
									fontWeight: "400",
									marginTop: 10,
								}}
							>
								Your Profile
							</Text>
						</View>
					</View>
					<View
						style={{
							height: 1,
							width: "100%",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
						}}
					/>
					<View>
						<View
							style={{
								marginHorizontal: 12,
								marginTop: 16,
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 10,
									paddingLeft: 8,
									backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
									paddingVertical: 12,
									width: normalize(140),
								}}
							>
								Badges
							</Text>
							<View
								style={{
									flexDirection: "row",
								}}
							>
								<View
									style={{
										backgroundColor: "rgba(146, 248, 255, 0.2)",
										borderRadius: 15,
										marginHorizontal: 4,
										borderColor: "#00CCDA",
										borderWidth: 1,
										alignItems: "center",
										alignSelf: "center",
									}}
								>
									<Text
										style={{
											color: "#00CCDA",
											paddingVertical: 4,
											paddingHorizontal: 10,
											fontSize: 10,
										}}
									>
										SELF
									</Text>
								</View>
								<View
									style={{
										backgroundColor: "rgba(255, 217, 19, 0.15)",
										borderRadius: 15,
										marginHorizontal: 4,
										borderColor: "#FFCA40",
										borderWidth: 1,
										alignItems: "center",
										alignSelf: "center",
									}}
								>
									<Text
										style={{
											color: "#FFCA40",
											paddingVertical: 4,
											paddingHorizontal: 10,
											fontSize: 10,
										}}
									>
										PEER
									</Text>
								</View>
								<View
									style={{
										backgroundColor: "rgba(255, 165, 197, 0.2)",
										borderRadius: 15,
										marginHorizontal: 4,
										borderColor: "#EE8080",
										borderWidth: 1,
										alignItems: "center",
										alignSelf: "center",
									}}
								>
									<Text
										style={{
											color: "#EE8080",
											paddingVertical: 4,
											paddingHorizontal: 10,
											fontSize: 10,
										}}
									>
										SKILLS ACTUAL
									</Text>
								</View>
							</View>
						</View>
						<View
							style={{
								marginHorizontal: 12,
								marginTop: 8,
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 10,
									paddingLeft: 8,
									backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
									paddingVertical: 12,
									width: normalize(140),
								}}
							>
								Team
							</Text>
							<View style={{ flexDirection: "row" }}>
								<Image source={require("../../../assets/images/flag.png")} />
								<Text
									style={{ fontWeight: "600", color: "white", paddingLeft: 4 }}
								>
									Canadiens
								</Text>
							</View>
						</View>
						<View
							style={{
								marginHorizontal: 12,
								marginTop: 8,
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 10,
									paddingLeft: 8,
									backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
									paddingVertical: 12,
									width: normalize(140),
								}}
							>
								League
							</Text>
							<View style={{ flexDirection: "row" }}>
								<Image source={require("../../../assets/images/flag.png")} />
								<Text
									style={{ fontWeight: "600", color: "white", paddingLeft: 4 }}
								>
									NHL
								</Text>
							</View>
						</View>
						<View
							style={{
								marginHorizontal: 12,
								marginTop: 8,
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 10,
									paddingLeft: 8,
									backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
									paddingVertical: 12,
									width: normalize(140),
								}}
							>
								Home Rink
							</Text>

							<Text
								style={{ fontWeight: "600", color: "white", paddingLeft: 4 }}
							>
								Centre Bell
							</Text>
						</View>
					</View>
				</ImageBackground>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 8,
					}}
				>
					<ProfileCards
						name={"General"}
						icon={require("../../../assets/icons/user1.png")}
						screen="General"
						navigation={props.navigation}
					/>
					<ProfileCards
						name={"Role"}
						icon={require("../../../assets/icons/grid.png")}
						screen="RoleTypes"
						navigation={props.navigation}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 8,
						marginTop: 12,
					}}
				>
					<ProfileCards
						name={"Skills"}
						icon={require("../../../assets/icons/star.png")}
						screen="Skills"
						navigation={props.navigation}
					/>
					<ProfileCards
						name={"Experience"}
						icon={require("../../../assets/icons/growth.png")}
						screen="Experience"
						navigation={props.navigation}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 8,
						marginTop: 12,
					}}
				>
					<ProfileCards
						name={"Position"}
						icon={require("../../../assets/icons/arrowhor.png")}
						screen="Position"
						navigation={props.navigation}
					/>
					<ProfileCards
						name={"Stats"}
						icon={require("../../../assets/icons/bar.png")}
						screen="Stats"
						navigation={props.navigation}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 8,
						marginTop: 12,
					}}
				>
					<ProfileCards
						name={"Friends"}
						icon={require("../../../assets/icons/usercheck.png")}
						screen="RoleTypes"
						navigation={props.navigation}
					/>
					<ProfileCards
						name={"History"}
						icon={require("../../../assets/icons/time.png")}
						screen="History"
						navigation={props.navigation}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	logo: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
});
export default Profile;
