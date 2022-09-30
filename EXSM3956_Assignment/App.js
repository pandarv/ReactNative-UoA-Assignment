import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
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
                <Text style={styles.textSize}>Enter Birthdate</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text>{value}</Text>
                <TextInput style={styles.input} value={inputVal} onChangeText={onChangeInputVal} placeholder="mm-dd-yyyy" />
            </View>
            <View style={styles.buttonSetting}>
                <Button title="Validation" onPress={onClickValidate} />
                <Button title="Today?" onPress={onClickHandle} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        backgroundColor: "rgb(200, 200, 255)",
        padding: 10,
        borderRadius: 8,
    },
    textSize: {
        fontSize: 32,
    },
    topContainer: {
        flex: 0.1,
        // width: 500,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        // backgroundColor: "rgb(128, 191, 255)",
    },
    bottomContainer: {
        // flex: 0.1,
        width: "100%",
        // backgroundColor: "rgb(226, 198, 236)",
    },
    buttonSetting: {
        flexDirection: "row",
        margin: 16,
    },
});
