import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator()




// import component
import Game1 from './Screen/Game1'
import Dashboard from './Screen/Dashboard'
import Login from './Screen/Login'
import Resultpage from './Screen/Resultpage'
import Resultgameid from './Screen/Resultgameid'


// screen orientaion & status bar


export default function App() {

  useEffect(()=>{
    StatusBar.setHidden(true)

   
    changeScreenOrientation();
  },[])
  
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  return (
    <NavigationContainer>
      <stack.Navigator headerMode={'none'} >
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name='Dashboard' component={Dashboard} />
        <stack.Screen name='Game' component={Game1} />
        <stack.Screen name='Resultpage' component={Resultpage} />
        <stack.Screen name='Resultgameid' component={Resultgameid} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

