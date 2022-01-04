import { observable, action } from "mobx";
import { createContext } from "react";
import axios from "../utils/axios.js";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class User {
	@observable phoneNumber = null;
	@observable userName = null;
	@observable userCity = null;
	@observable token = null;
	@observable user_id = null;
	@observable loginResponse = null;

	constructor() {}

	setAuthToken = async () => {
		const token = await AsyncStorage.getItem("@app:token");
		const user_id = await AsyncStorage.getItem("@app:user_id");
		const phoneNumber = await AsyncStorage.getItem("@app:phoneNumber");
		this.token = token;
		this.user_id = user_id;
		this.phoneNumber = phoneNumber;
		console.log("hey token", token);
	};

	@action setPhoneNumber = async (phone) => {
		this.phoneNumber = phone;
	};

	@action setNameAndCity = async (name, city) => {
		this.userName = name;
		this.userCity = city;
	};

	@action login = async (code) => {
		let response_fetched = false;
		let errors = [];
		await axios
			.post("/user/login/", {
				mobile: this.phoneNumber,
				password: code,
			})
			.then((response) => {
				console.log("Response Login", response);
				this.token = response.data.access;
				this.loginResponse = jwt_decode(this.token);
				this.user_id = this.loginResponse.user_id;
				AsyncStorage.setItem("@app:phoneNumber", this.phoneNumber);
				AsyncStorage.setItem("@app:token", this.token);
				AsyncStorage.setItem("@app:user_id", this.user_id);
				response_fetched = true;
			})
			.catch((error) => {
				console.log("Error Login", JSON.stringify(error));
			});
		return [response_fetched, errors];
	};
}
export const UserStoreContext = createContext(new User());
