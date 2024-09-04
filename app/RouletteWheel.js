## typos included 


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';

const RouletteWheel = () => {
    const [spinAnim] = useState(new Animated.Value(0));

    const spinWheel = () => {
        Animated.timing(spinAnim, {
            toValue: 1,
            duration: 5000,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start(() => {
            const randomNumber = Math.floor(Math.random() * 37); // Random number between 0 and 36
            Alert.alert("Result", `The ball landed on ${randomNumber}`, [
                { text: "OK" },
            ]);
            spinAnim.setValue(0); // Reset after animation
        });
    };

    const spinInterpolate = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ rotate: spinInterpolate }] }}>
                <Svg height="300" width="300" viewBox="0 0 100 100">
                    <Circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2.5" fill="#E32636" />
                    <Circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="#FFD700" />
                    {/* Add wheel numbers and sections here */}
                    <Circle cx="50" cy="50" r="5" fill="white" />
                </Svg>
            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={spinWheel}>
                <Text style={styles.buttonText}>Spin the Wheel</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    button: {
        marginTop: 30,
        padding: 15,
        backgroundColor: '#FFD700',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#1E1E1E',
        fontWeight: 'bold',
    },
});

export default RouletteWheel;
