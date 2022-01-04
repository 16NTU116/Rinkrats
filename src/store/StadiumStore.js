import { observable, action } from "mobx";
import { createContext } from "react";
import axios from "../utils/axios.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Stadium {
	@observable stadiumDetails = [];
	@observable bookings = [];

	constructor() {}

	@action details = async (user_token) => {
		console.log("usertoken is ", user_token);
		let response_fetched = false;
		let errors = [];
		await axios
			.get("stadium/owners/stadiums/", {
				headers: {
					Authorization: `JWT ${user_token}`,
				},
			})
			.then((response) => {
				console.log("fields response ===> " + JSON.stringify(response.data));
				this.stadiumDetails = response.data;
				response_fetched = true;
			})
			.catch((error) => {
				console.log(JSON.stringify(error));
				errors = error;
			});
		return [response_fetched, errors];
	};
	@action getBookings = async (user_token) => {
		let response_fetched = false;
		let errors = [];
		await axios
			.get(`booking/owners/bookings/`, {
				headers: {
					Authorization: `JWT ${user_token}`,
				},
			})
			.then((response) => {
				console.log("my bookings ====> ", response.data);
				this.bookings = response.data;
				response_fetched = true;
			})
			.catch((error) => {
				console.log(JSON.stringify(error.response.data["Error"]));
				errors = error.response.data["Error"];
			});
		return [response_fetched, errors];
	};

	@action edit = async (user_token, stadium_id, values) => {
		let response_fetched = false;
		let errors = [];
		await axios
			.patch(`stadium/owners/stadiums/${stadium_id}/`, values, {
				headers: {
					Authorization: `JWT ${user_token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				this.stadiumDetails = [response.data];
				response_fetched = true;
			})
			.catch((error) => {
				console.log(JSON.stringify(error));
				errors = error;
			});
		return [response_fetched, errors];
	};

	@action createField = async (user_token, values) => {
		let response_fetched = false;
		let errors = [];
		await axios
			.post(`stadium/owners/fields/`, values, {
				headers: {
					Authorization: `JWT ${user_token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				response_fetched = true;
			})
			.catch((error) => {
				console.log(JSON.stringify(error));
				errors = error;
			});
		await this.details(user_token); // TODO remove after the response is fixed
		return [response_fetched, errors];
	};

	@action bookField = async (user_token, values) => {
		let response_fetched = false;
		let errors = [];
		await axios
			.post(`booking/owners/bookings/`, values, {
				headers: {
					Authorization: `JWT ${user_token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				response_fetched = true;
			})
			.catch((error) => {
				console.log(JSON.stringify(error.response.data["Error"]));
				errors = error.response.data["Error"];
			});
		return [response_fetched, errors];
	};
}
export const StadiumStore = createContext(new Stadium());
