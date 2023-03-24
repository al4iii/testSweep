import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Secondary = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <View
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{}}>Page Two</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Main')}
                    style={[styles.button, { marginBottom: 200 }]}
                >
                    <Text style={{ fontSize: 25 }}>
                        Go to main page
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Secondary;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#708090',
        padding: 10,
        margin: 15
    },
});