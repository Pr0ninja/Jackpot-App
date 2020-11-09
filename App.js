import React,{useEffect} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';



// import component
import Game1 from './Screen/Game1'

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
   <Game1 />
  );
}

