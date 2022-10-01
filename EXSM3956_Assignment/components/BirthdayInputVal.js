import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { stringifyValueWithProperty } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
export default function BirthdayInputVal() {
	const [inputVal, onChangeInputVal] = React.useState("");
	const [value, setValue] = React.useState("");
	console.log(inputVal);
	const onClickHandle = () => {
		setValue(inputVal);
		onChangeInputVal("");
	};
	const onClickValidate = () => {
		console.log(inputVal);
	};
	const dateDisplay = (val) => {
		const d = new Date(val);
		const date = d.getDate() + 1;
		const month = d.getMonth() + 1;
		const year = d.getFullYear();
		return `${month} - ${date} - ${year}`;
	};
	// dateDisplay(value);
	console.log(new Date().toDateString());

	const dateFormater = (inputData) => {
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
			<View style={styles.bottomContainer}>
				<Text>After Today's Press: {value}</Text>
				<Text>On change Value: {inputVal}</Text>
				<Text>On change Value: {new Date("2012-12-12").toLocaleDateString()}</Text>
				<Text>On change Value: {dateDisplay(value)}</Text>
				<TextInput style={styles.input} value={inputVal} onChangeText={(newText) => onChangeInputVal(dateFormater(newText))} placeholder="yyyy-mm-dd" />
			</View>
			<View style={styles.buttonSetting}>
				<Button title="Validation" onPress={onClickValidate} />
				<Button title="Today?" onPress={onClickHandle} />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 0.7,
		alignItems: "center",
		justifyContent: "top",
		padding: 10,
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
