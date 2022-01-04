import { StyleSheet, Dimensions } from "react-native";
import Colors from "./colors";
import Fonts from "./fonts";
import { RFValue, RFPercentage } from "./fontSizeStyling";

const SCREEN_WIDTH = Math.round(Dimensions.get("window").width);

const Styles = StyleSheet.create({
	centerPage: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: Colors.white,
		paddingHorizontal: 12,
	},
	centerPageScroll: {
		flex: 1,
		backgroundColor: Colors.white,
		paddingHorizontal: 12,
	},
	logo: {
		alignSelf: "center",
		width: 420,
		height: 234,
	},
	underlineStyleBase: {
		width: SCREEN_WIDTH / 8,
		height: 45,
		borderWidth: 2,
		borderBottomWidth: 1,
		borderColor: Colors.color6,
		color: Colors.color3,
		backgroundColor: Colors.white,
	},

	underlineStyleHighLighted: {
		borderColor: Colors.color1,
	},
	headingText: {
		fontFamily: Fonts.bold,
		fontSize: RFValue(16),
	},
	subHeadingText: {
		fontFamily: Fonts.semiBold,
		fontSize: RFValue(16),
	},
	paraText: {
		fontFamily: Fonts.medium,
		fontSize: RFValue(10),
	},
	background: {
		backgroundColor: Colors.white,
		flex: 1,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Styles;
