import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000); // 3 seconds delay
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Roulette Wheel Generator</Text>
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
    text: {
        fontSize: 30,
        color: '#FFD700',
        fontWeight: 'bold',
    },
});

export default SplashScreen;
