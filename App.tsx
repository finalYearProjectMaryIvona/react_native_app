import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import YourApp from './App';
import ObjectDetection from './ObjectDetection';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourApp">
        <Stack.Screen 
          name="YourApp" 
          component={YourApp} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="ObjectDetection" 
          component={ObjectDetection} 
          options={{ title: 'Object Detection' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
