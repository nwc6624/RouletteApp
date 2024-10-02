import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/SplashScreen';
import RouletteWheel from './app/RouletteWheel';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={RouletteWheel} options={{ title: 'Roulette Wheel' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
