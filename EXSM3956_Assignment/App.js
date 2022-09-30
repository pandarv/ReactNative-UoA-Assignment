import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import BirthdayInputVal from "./components/BirthdayInputVal";
import BirthdayWish from "./components/BirthdayWish";
export default function App() {
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
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.textSize}>Birthdate Notification</Text>
            </View>
            <BirthdayInputVal />
            {/* <BirthdayWish /> */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "rgb(55,55,55)",
    },
    textSize: {
        fontSize: 32,
        // color: "rgb(255,255,255)",
        // backgroundColor: "rgb(128, 191, 255)",
    },
    topContainer: {
        flex: 0.3,
        // width: 500,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        // backgroundColor: "rgb(128, 191, 255)",
    },
});
