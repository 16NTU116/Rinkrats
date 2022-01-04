import React, { useState, useEffect, useContext, useRef } from "react";
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

import {
	LOGO,
	ONBOARD1,
	SCREEN_HEIGHT,
	SCREEN_WIDTH,
} from "../utils/Constants";
import Colors from "../utils/colors";
import OnboardingSmallText from "../components/OnboardingSmallText";
import InputText from "../components/InputText";

const swipeCircle = (index, active) => {
	console.log("inidex is ", index);
	console.log("inidex is ", active);

	return (
		<Ionicons
			name={"ellipse"}
			style={{ marginHorizontal: 4 }}
			color={index === active ? Colors.prim1 : Colors.dull}
			size={18}
		/>
	);
};

const OnboardingCard = (props) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={props.image}
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}
				style={{ marginBottom: 0 }}
			/>
			<View
				style={{
					position: "absolute",
					top: SCREEN_HEIGHT * 0.475,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			>
				<View style={{ position: "relative", top: SCREEN_HEIGHT * 0.1 }}>
					<Image
						source={LOGO}
						style={{
							alignSelf: "center",
							width: 130,
							height: 130,
							marginBottom: 12,
						}}
					/>

					<OnboardingSmallText text={props.text} />

					<View
						style={{
							justifyContent: "center",
							// marginTop: 40,
						}}
					>
						<TouchableOpacity
							style={{
								alignItems: "center",
								alignSelf: "center",
								backgroundColor: Colors.prim1,
								marginHorizontal: 20,
								borderRadius: 2,
								width: SCREEN_WIDTH * 0.9,
								marginTop: 36,
								padding: 16,
							}}
							onPress={() => props.navigation.navigate("MainScreen")}
						>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "500",
									color: Colors.white,
								}}
							>
								GET STARTED
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: Colors.primary,
	},
	logo: {
		alignSelf: "center",
		top: -20,
		position: "absolute",
	},
});
export default OnboardingCard;
