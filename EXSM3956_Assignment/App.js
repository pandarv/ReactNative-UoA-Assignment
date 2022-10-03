import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BirthdayInputVal from "./components/BirthdayInputVal";
import BirthdayWish from "./components/BirthdayWish";

const Stack = createNativeStackNavigator();
export default function App() {
    // const [inputVal, onChangeInputVal] = React.useState("");
    // const [value, setValue] = React.useState("");
    // console.log(inputVal);
    // const onClickHandle = () => {
    //     setValue(inputVal);
    //     onChangeInputVal("");
    // };
    // const onClickValidate = () => {
    //     console.log(inputVal);
    // };
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={BirthdayInputVal} />
                    <Stack.Screen name="Wish" component={BirthdayWish} />
                </Stack.Navigator>
                {/* <BirthdayWish /> */}
            </SafeAreaView>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "rgb(183, 170, 191)",
    },
    textSize: {
        fontSize: 32,
        // backgroundColor: "rgb(183, 170, 191)",
        // color: "rgb(255,255,255)",
        // backgroundColor: "rgb(128, 191, 255)",
    },
    background: {
        backgroundColor: "rgb(183, 170, 191)",
    },
});
