import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity,
	Text,
	TextInput,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import jwt_decode from "jwt-decode";
import {
	SCREEN_HEIGHT,
	ONBOARDING_BG2,
	SCREEN_WIDTH,
	LOCK,
} from "../../utils/Constants";
import AuthHeader from "../../components/AuthHeader";
import AuthText from "../../components/AuthText";
// import { UserStoreContext } from "../store/UserStoreContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

const About = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<View style={styles.container}>
			<Image
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}
				style={styles.logo}
				source={ONBOARDING_BG2}
			/>
			<View
				style={{
					position: "absolute",
					top: SCREEN_HEIGHT * 0.05,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			>
				<View
					style={{ position: "relative", marginHorizontal: 21, marginTop: 13 }}
				>
					<AuthHeader title="About Rink Rats" navigation={props.navigation} />
					<View style={{}}>
						<Text
							style={{
								color: "white",
								fontSize: 14,
								fontWeight: "400",
								marginTop: normalize(19),
								lineHeight: 21,
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque diam lacus, imperdiet a risus ut, congue vehicula
							arcu. Nulla facilisi. Pellentesque scelerisque ante vel lorem
							dictum vestibulum.
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "500",
								color: "white",
								marginTop: 42,
							}}
						>
							FOUNDERS
						</Text>
						<View
							style={{
								flexDirection: "row",
								marginTop: 16,
								justifyContent: "space-between",
							}}
						>
							<View>
								<Image source={require("../../../assets/images/f1.png")} />
								<View
									style={{
										paddingVertical: 12,
										paddingHorizontal: 12,
										backgroundColor: "rgba(255, 255, 255, 0.15)",
									}}
								>
									<Text
										style={{ fontSize: 16, fontWeight: "500", color: "white" }}
									>
										JUMP
									</Text>
									<Text
										style={{
											fontSize: 14,
											fontWeight: "500",
											color: "#A6AEB9",
										}}
									>
										CEO & Co-founder
									</Text>
								</View>
							</View>
							<View>
								<Image source={require("../../../assets/images/f2.png")} />
								<View
									style={{
										paddingVertical: 12,
										paddingHorizontal: 12,
										backgroundColor: "rgba(255, 255, 255, 0.15)",
									}}
								>
									<Text
										style={{ fontSize: 16, fontWeight: "500", color: "white" }}
									>
										Shruti Yadav
									</Text>
									<Text
										style={{
											fontSize: 14,
											fontWeight: "500",
											color: "#A6AEB9",
										}}
									>
										COO & Co-founder
									</Text>
								</View>
							</View>
						</View>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "500",
								color: "white",
								marginTop: 42,
							}}
						>
							OUR PARTNERS
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
								marginTop: 38,
							}}
						>
							<Image source={require("../../../assets/images/g.png")} />
							<Image source={require("../../../assets/images/sc.png")} />
							<Image source={require("../../../assets/images/ig.png")} />
						</View>
						<Text
							style={{
								color: "white",
								fontSize: 14,
								fontWeight: "400",
								marginTop: normalize(19),
								lineHeight: 21,
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque diam lacus
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
});
export default About;
