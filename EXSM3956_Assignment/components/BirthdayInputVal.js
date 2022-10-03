import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { stringifyValueWithProperty } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
// import BirthdayWish from "./BirthdayWish";

export default function BirthdayInputVal({ navigation }) {
	const [inputDateValue, onChangeInputDateVal] = useState("");
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [age, setAge] = useState("");
	const [birthday, setBirthday] = useState("");
	const [nextBirthday, setNextBirthday] = useState("");
	const [toggle, setToggle] = useState(true);
	const inputFocus = useRef(null);

	useEffect(() => {
		inputFocus.current.focus();
	}, []);

	const onClickValidate = () => {
		if (inputDateValue.length < 10) {
			setError("Please fillout yyyy-mm-dd");
			setToggle(true);
		} else {
			const newDate = dateDisplay(inputDateValue).toDateString();
			const years = new Date().getFullYear() - new Date(newDate).getFullYear();
			if (newDate == "Invalid Date") {
				// setToggle(false);
				setError("Invalid Date. Please Enter correct date.");
				setToggle(true);
			} else if (new Date(newDate) > new Date()) {
				setError("You are not Born Yet");
				setToggle(true);
				// setToggle(false);
				// } else if ((new Date(newDate).getMonth() && new Date(newDate).getDate()) > (new Date().getMonth() && new Date().getDate())) {
				//     console.log("Here: " + years);
				// } else if (new Date(newDate) <= new Date()) {
				//     const calculatedDate = new Date() - new Date(newDate);
				//     const months = new Date().getMonth() - new Date(newDate).getMonth();
				//     const days = new Date(calculatedDate).getDate();
				//     console.log("Hmm: " + years);
				//     setAge(`Year: ${years}`);
				//     setValue(newDate);
			} else {
				const year = new Date(newDate).getFullYear();
				const month = (new Date(newDate).getMonth() + 1).toLocaleString();
				const modMonth = month.length == 1 ? "0" + month : month;
				const day = new Date(newDate).getDate().toLocaleString();
				const modDay = day.length == 1 ? "0" + day : day;
				const yearsOld = (Date.now() - Date.parse(newDate)) / (1000 * 60 * 60 * 24 * 365.25);
				const getYear = new Date(newDate).getFullYear() + Math.floor(yearsOld);
				const nextYear = getYear + 1;
				console.log(nextYear);
				setBirthday(dateDisplay(`${getYear}-${modMonth}-${modDay}`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }));
				setNextBirthday(dateDisplay(`${nextYear}-${modMonth}-${modDay}`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }));
				setAge(`Year: ${Math.floor(yearsOld)}`);
				setValue(newDate);
				setToggle(false);
			}
		}
		onChangeInputDateVal("");
	};
	const dateDisplay = (val) => {
		const d = new Date(val);
		const userTimezoneOffset = d.getTimezoneOffset() * 60000;
		const newD = new Date(d.getTime() + userTimezoneOffset);
		const now = new Date();
		// console.log(`Currect: ${now} Given: ${d} ModDate: ${newD}`);
		// console.log(`${month} - ${date} - ${year}`);
		return newD;
	};
	// dateDisplay(value);
	// console.log(value);

	// console.log(new Date(value) > new Date());
	// console.log(dateDisplay(value).toDateString());
	// console.log(new Date(value) == new Date());

	const dateFormater = (inputData) => {
		setError("");
		if (!inputData) return inputData;
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
				<Text>DOB: {value}</Text>
				<Text>Age: {age}</Text>
				<Text>Last Birthday: {birthday}</Text>
				<Text>Next Birthday: {nextBirthday}</Text>
				<Text>On change Value: {inputDateValue}</Text>
				<TextInput ref={inputFocus} style={styles.input} value={inputDateValue} onChangeText={(newText) => onChangeInputDateVal(dateFormater(newText))} placeholder="yyyy-mm-dd" />
			</View>
			<View>
				{/* <Text>{new Date(value) > Date.now() ? "You are not Born Yet" : ""}</Text> */}
				<Text>{error && error}</Text>
			</View>
			<View style={styles.buttonSetting}>
				<Button title="Validation" onPress={onClickValidate} />
				<Button
					title="Today?"
					disabled={toggle ? true : false}
					onPress={() => {
						navigation.navigate("Wish", { birthdate: nextBirthday });
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
		// backgroundColor: "white",
		// backgroundColor: "#d6cbc1",
		backgroundColor: "rgb(183, 170, 191)",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderColor: "rgb(116, 116, 255)",
		// backgroundColor: "rgb(200, 200, 255)",
		backgroundColor: "rgb(183, 170, 191)",
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
