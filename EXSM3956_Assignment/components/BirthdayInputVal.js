import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { stringifyValueWithProperty } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
import BirthdayWish from "./BirthdayWish";

export default function BirthdayInputVal({ navigation }) {
	const [inputDateValue, onChangeInputDateVal] = React.useState("");
	const [value, setValue] = React.useState("");
	const [error, setError] = React.useState("");

	const onClickValidate = () => {
		const newDate = dateDisplay(inputDateValue).toDateString();
		if (newDate == "Invalid Date") {
			setError("Invalid Date. Please Enter correct date.");
			// }
			// else if (new Date(newDate) > new Date()) {
			// 	setError("You are not Born Yet");
		} else {
			setValue(newDate);
		}
		onChangeInputDateVal("");
	};
	const dateDisplay = (val) => {
		console.log("Val: " + val);
		const d = new Date(val);
		const userTimezoneOffset = d.getTimezoneOffset() * 60000;
		const newD = new Date(d.getTime() + userTimezoneOffset);
		const now = new Date();
		console.log(`Currect: ${now} Given: ${d} ModDate: ${newD}`);
		// console.log(`${month} - ${date} - ${year}`);
		return newD;
	};
	// dateDisplay(value);
	console.log(value);

	console.log(new Date(value) > new Date());
	// console.log(dateDisplay(value).toDateString());
	// console.log(new Date(value) == new Date());

	const dateFormater = (inputData) => {
		setError("");
		const onlyDigits = inputData.replace(/[^\d]/g, "");
		if (onlyDigits.length < 5) {
			return onlyDigits;
		} else if (onlyDigits.length < 7) {
			return `${onlyDigits.slice(0, 4)}-${onlyDigits.slice(4)}`;
		} else {
			return `${onlyDigits.slice(0, 4)}-${onlyDigits.slice(4, 6)}-${onlyDigits.slice(6, 8)}`;
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Text style={styles.textSize}>Birthdate</Text>
			</View>
			<View style={styles.bottomContainer}>
				<Text>After Today's Button Click: {value}</Text>
				<Text>On change Value: {inputDateValue}</Text>
				<TextInput style={styles.input} value={inputDateValue} onChangeText={(newText) => onChangeInputDateVal(dateFormater(newText))} placeholder="yyyy-mm-dd" />
			</View>
			<View>
				{/* <Text>{new Date(value) > Date.now() ? "You are not Born Yet" : ""}</Text> */}
				<Text>{error && error}</Text>
			</View>
			<View style={styles.buttonSetting}>
				<Button title="Validation" onPress={onClickValidate} />
				<Button
					title="Today?"
					disabled={!error || inputDateValue.length ? false : true}
					onPress={() => {
						navigation.navigate("Wish", { birthdate: value });
					}}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "top",
		padding: 10,
		backgroundColor: "white",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderColor: "rgb(116, 116, 255)",
		backgroundColor: "rgb(200, 200, 255)",
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},
	textSize: {
		fontSize: 32,
	},
	topContainer: {
		flex: 0.4,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
	},
	bottomContainer: {
		// flex: 0.1,
		width: "100%",
	},
	buttonSetting: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 24,
	},
	marginButton: {
		margin: 4,
	},
});
