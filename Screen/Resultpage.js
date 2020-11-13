import React,{useEffect, useState} from 'react'
import { View, Text, ImageBackground } from 'react-native'
import firebase from '../Database/Config'
import 'firebase/firestore'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function Resultpage({ navigation, route }) {

   const[winningData,setWinningData]=useState([])


    const year = new Date();
    const value = year.getFullYear() + "." + year.getMonth() + "." + year.getDay()
    useEffect(() => {

        firebase.firestore().collection('Winner').where('date', '==', value).where('counterId','==',route.params.token).get().then(querySnapsho => {
            const list = [];
            console.log(querySnapsho.size)
            if (querySnapsho.size > 0) {
                querySnapsho.forEach(doc => {
                   
                    const { WinningCard, counterId, date, gameId } = doc.data()
                    list.push({
                        id: doc.id,
                        WinningCard,
                        counterId,
                        date,
                        gameId
                    })
                    
                })
            }
            setWinningData(list)
            
        })


       
    },[])

    return (
        <ImageBackground style={{flex:1}} source={require('../Image/Games/game4.jpg')} >
            <View style={{alignItems:'center',flex:1}} >
                <Text style={{fontSize:30,color:'white',backgroundColor:'blue',borderRadius:5}} >Result</Text>
            </View>
            <View style={{ flex: 6 }}>
                <ScrollView >
                    {
                        winningData.map((item,index) => (
                            <View style={{ backgroundColor: 'orange', margin: 10, padding: 15, borderRadius: 10, borderColor: 'white', borderWidth: 3, flexDirection: 'row',justifyContent:'space-around' }} >
                                <View>
                                    <Text>Game no : {index}</Text>
                               </View>
                                <View style={{ flexDirection:'row' }} >
                                    <Text style={{fontSize:20}} >GAME ID : </Text>
                               
                                    <Text style={{ fontSize: 20 }} >{item.gameId}</Text>
                                </View>
                                <TouchableOpacity onPress={() => { navigation.navigate('Resultgameid', { token: route.params.token, gameId: item.gameId,card: item.WinningCard})}} style={{backgroundColor:'green',padding:5,borderColor:'white',borderWidth:2}} >
                                    <Text style={{ fontSize: 15,color:'white' }}>Total Summary</Text>
                                </TouchableOpacity>
                               


                            </View>
                        ))
                    }


                </ScrollView>
                
            </View>
            
            
            
        </ImageBackground>
    )
}

