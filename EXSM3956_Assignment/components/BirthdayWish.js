import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BirthdayInputVal from "./BirthdayInputVal";

const BirthdayWish = ({ route }) => {
	return (
		<View style={styles.container}>
			<Text>Your Birthdate is: {route.params.birthdate}</Text>
			<Text style={styles.textSize}>Happy Birthday!!🥳! </Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "rgb(55,55,55)",
	},
	textSize: {
		fontSize: 24,
	},
});

export default BirthdayWish;
