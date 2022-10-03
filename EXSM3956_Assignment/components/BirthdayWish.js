import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BirthdayInputVal from "./BirthdayInputVal";

const BirthdayWish = ({ navigation, route }) => {
    const [timeRemaining, setTimeRemaining] = useState({ dayRemaining: "", hoursRemaining: "", minRemaining: "", secondsRemaining: "" });
    const [bDay, setBDay] = useState(false);
    const { birthdate } = route.params;
    useEffect(() => {
        if ((new Date().getMonth() && new Date().getDate()) == (new Date(birthdate).getMonth() && new Date(birthdate).getDate())) {
            setBDay((prev) => !prev);
        }

        const totalSec = (Date.parse(birthdate) - Date.now()) / 1000;
        const hours = Math.floor(totalSec / 3600) % 24;
        const mins = Math.floor(totalSec / 60) % 60;
        const seconds = Math.floor(totalSec) % 60;
        const days = Math.floor(totalSec / 3600 / 24);
        let interval = setInterval(() => {
            setTimeRemaining((prev) => ({ ...prev, dayRemaining: days, hoursRemaining: hours, minRemaining: mins, secondsRemaining: seconds }));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text>Your Birthdate is on: {birthdate}</Text>
                <Text style={styles.heading}>Birthday Coutdown</Text>
            </View>
            <View style={styles.bottomContainer}>
                {bDay ? (
                    <View>
                        <Text style={styles.textSize}>"Happy Birthday!!! 🥳"</Text>
                    </View>
                ) : (
                    <View style={styles.direction}>
                        <Text style={styles.marginAround}>Days: {timeRemaining.dayRemaining}</Text>
                        <Text style={styles.marginAround}>Hours: {timeRemaining.hoursRemaining}</Text>
                        <Text style={styles.marginAround}>Minuts: {timeRemaining.minRemaining}</Text>
                        <Text style={styles.marginAround}>Seconds: {timeRemaining.secondsRemaining}</Text>
                    </View>
                )}
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
        backgroundColor: "rgb(183, 170, 191)",
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
    },
    bottomContainer: {
        flex: 0.5,
        width: "100%",
        alignItems: "center",
        justifyContent: "top",
        // backgroundColor: "#CDD6D0",
    },
    direction: {
        flexDirection: "column",
    },
    heading: {
        fontSize: 32,
        marginTop: 16,
    },
    marginAround: {
        fontSize: 24,
        margin: 8,
        padding: 8,
    },
});

export default BirthdayWish;
