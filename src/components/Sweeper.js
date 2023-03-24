import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Image, Linking } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import { DATA } from '../store/store';
import close from '../img/close.png';

const Sweeper = ({ navigation, swipeUpDownRef }) => {
    const data = DATA.dataSweeper

    const handlePress = async () => {
        await Linking.openURL(data.link);
    };

    return (
        <SwipeUpDown
            itemFull={() => (
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.close}
                            onPress={() => swipeUpDownRef?.current?.showMini()}>
                            <Image source={close} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <TouchableWithoutFeedback style={styles.sweeper}>
                            <View style={styles.sweeper}>
                                <View style={styles.image} >
                                    <Image source={{ uri: data.img }} style={{ width: 350, height: 300 }} />
                                </View>
                                <View style={styles.title} >
                                    <Text style={styles.title}>
                                        {data.title}
                                    </Text>
                                </View>

                                <Text style={styles.text}>
                                    {data.text}
                                </Text>
                                <Text style={styles.text}>
                                    {data.text2}
                                </Text>
                                <Text style={styles.text}>
                                    {data.text3}
                                </Text>
                                <TouchableOpacity
                                    onPress={(handlePress)}
                                    style={styles.button}
                                >
                                    <Text style={{ fontSize: 25 }}>
                                        Go to website
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(data.linkApp)}
                                    style={[styles.button, { marginBottom: 200 }]}
                                >
                                    <Text style={{ fontSize: 25 }}>
                                        Go to other page
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
            )}
            ref={swipeUpDownRef}
            animation="linear"
            disableSwipeIcon
            extraMarginTop={50}
            iconColor="yellow"
            iconSize={25}
            swipeHeight={100}
            disablePressToShow={false}
            style={{ backgroundColor: '#A9A9A9' }}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#708090',
        padding: 10,
        margin: 15
    },
    title: {
        margin: 15,
        justifyContent: "center",
        alignItems: 'center',
        fontSize: 20,
    },
    text: {
        fontSize: 16
    },
    header: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    sweeper: {
        margin: 15,
    },
    image: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default Sweeper;