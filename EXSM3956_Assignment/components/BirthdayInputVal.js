import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
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

    return (
        <View style={styles.container}>
            <View style={styles.bottomContainer}>
                <Text>After Today's Press: {value}</Text>
                <Text>On change Value: {inputVal}</Text>
                <TextInput
                    style={styles.input}
                    value={inputVal}
                    onChangeText={(newText) => onChangeInputVal(newText.replace(/[^\d]/g, ""))}
                    placeholder="mm-dd-yyyy"
                />
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
