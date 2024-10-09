import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_01 from './components/Screen_01.jsx';
import Screen_02 from './components/Screen_02.jsx';
import Screen_03 from './components/Screen_03.jsx';
import { BasketProvider } from './BasketContextAPI/BasketContext.js';
import { LogBox } from 'react-native';


LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BasketProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Screen_01" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Screen_01"
            component={Screen_01}
            options={{ title: 'Screen_01' }}
          />
          <Stack.Screen
            name="Screen_02"
            component={Screen_02}
            options={{ title: 'Screen_02' }}
          />
          <Stack.Screen
            name="Screen_03"
            component={Screen_03}
            options={{ title: 'Screen_03' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BasketProvider>
  );
}
