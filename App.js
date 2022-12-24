import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//
// Redux
//
import { store } from './src/redux/store/store'
import { Provider } from 'react-redux'
// -----------

//
// Pages
//
import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';
// -----------

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
