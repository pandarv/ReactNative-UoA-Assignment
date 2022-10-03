import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BirthdayInputVal from "./BirthdayInputVal";

const BirthdayWish = ({ navigation, route }) => {
    const [bDay, setBDay] = useState(null);
    const { birthdate } = route.params;
    useEffect(() => {
        const year = new Date(birthdate).getFullYear();
        const month = (new Date(birthdate).getMonth() + 1).toLocaleString();
        const modMonth = month.length == 1 ? "0" + month : month;
        const day = new Date(birthdate).getDate().toLocaleString();
        const modDay = day.length == 1 ? "0" + day : day;
        const yearsOld = (Date.now() - Date.parse(birthdate)) / (1000 * 60 * 60 * 24 * 365.25);
        const getYear = new Date(birthdate).getFullYear() + Math.floor(yearsOld);
        // const nextBD = (Date.now() - Date.parse(birthdate) + 1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24 * 365.25);
        console.log(`Years OLD: ${Math.floor(yearsOld)}`);
        console.log(`Years Get Year: ${modMonth}`);
        console.log(`Years Get Year: ${modDay}`);
        const d = new Date(`${getYear}-${modMonth}-${modDay}`);
        const userTimezoneOffset = d.getTimezoneOffset() * 60000;
        const getNewBD = new Date(d.getTime() + userTimezoneOffset);
        console.log(`New BD ${getNewBD}`);
        // console.log(`Years OLD: ${Math.floor(nextBD)}`);
        // console.log(`Years OLD: ${new Date(nextBD)}`);
        // console.log(daysLived);
        if ((new Date().getMonth() && new Date().getDate()) == (new Date(birthdate).getMonth() && new Date(birthdate).getDate())) {
            setBDay("Happy Birthday!!! 🥳");
        }
        // if ((new Date().getMonth() && new Date().getDate()) < (new Date(birthdate).getMonth() && new Date(birthdate).getDate())){
        // 	const
        // }
    }, [birthdate]);
    console.log(`From Month: ${new Date(birthdate)}`);
    // console.log(`From Month: ${new Date(birthdate).getMonth()}`);
    // console.log(`From Year: ${new Date(birthdate).getUTCFullYear()}`);
    // console.log(`From Year: ${new Date(birthdate).getDate()}`);
    // console.log(`From Today: ${new Date()}`);
    // // console.log(`Mil Sec Now : ${Date.now()}`);
    // console.log(`DOB in Mil Sec: ${Date.parse(birthdate)}`);
    // console.log(`Age Days: ${(Date.now() - Date.parse(birthdate)) / (1000 * 60 * 60 * 24)}`);
    // console.log(`Age remaining days: ${(Date.now() - Date.parse(birthdate)) / (1000 * 60 * 60 * 24) - 51 * 365.25}`);
    // console.log(`Age Years: ${(Date.now() - Date.parse(birthdate)) / (1000 * 60 * 60 * 24 * 365.25)}`);
    // console.log(`Age Years: ${41 * 365.25}`);
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text>Your Birthdate is on: {birthdate}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.textSize}>{bDay && bDay}</Text>
            </View>
            {/* <Button
                title="Back"
                // disabled={!error || inputDateValue.length ? false : true}
                onPress={() => {
                    navigation.navigate("Home");
                }}
            /> */}
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
        fontSize: 36,
    },
    topContainer: {
        flex: 0.2,
        width: " 100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#d6cbc1",
    },
    bottomContainer: {
        flex: 0.5,
        width: "100%",
        alignItems: "center",
        justifyContent: "top",
        backgroundColor: "#CDD6D0",
    },
});

export default BirthdayWish;
